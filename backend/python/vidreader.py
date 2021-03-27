import skvideo
import numpy as np
from matplotlib import pyplot as plt
import os
from skvideo import io
from skvideo import utils

# load video
cwd = os.getcwd()
PATH_TO_FFMPEG = os.path.join(cwd, 'ffmpeg')
PATH_TO_VID = os.path.join(cwd, 'vid/testvid_real_test_Trim.mp4')

skvideo.setFFmpegPath(PATH_TO_FFMPEG)

video = io.vread(PATH_TO_VID, as_grey=True)
num_frames = video.shape[0]

# cut block
block = video[:num_frames, :10, :10]

# find avg of block for each frame
avg_frames = np.empty(num_frames)
for i in range(num_frames):
	frame = block[i]
	avg_frame = np.sum(frame)/100
	avg_frames[i] = avg_frame

#print(avg_frames)

# remove repeated averages
reduced_avg_frames = []
accuracy = 4

prev = -1
frame_count = 0
timesteps = []
for i in range(num_frames):
	if round(avg_frames[i], accuracy) != prev:
		reduced_avg_frames.append(round(avg_frames[i], accuracy))
		timesteps.append(frame_count)
		prev = round(avg_frames[i], accuracy)
	else:
		frame_count += 1


# find del(f_avg)
# step through, checking L and R dels
extrema = 0
def leftrise(framelist, index):
	if index == 0:
		return None
	else:
		return framelist[index] - framelist[index-1]

def rightrise(framelist, index):
	try:
		return framelist[index+1] - framelist[index]
	except IndexError:
		return None

for i in range(len(reduced_avg_frames)):
	lrise = leftrise(reduced_avg_frames, i)
	rrise = rightrise(reduced_avg_frames, i)

	if lrise and rrise:
		if lrise/abs(lrise) == -rrise/abs(rrise):
			extrema += 1
	else:
		extrema += 1

if extrema % 2 == 0:
	reps = extrema/4
else:
	reps = (extrema-1)/4

print(reps)

# if peak found, log
