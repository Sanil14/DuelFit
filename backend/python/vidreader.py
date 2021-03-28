import skvideo
import numpy as np
from matplotlib import pyplot as plt
import os
from skvideo import io
from skvideo import utils
import utils

# load video
cwd = os.getcwd()
PATH_TO_FFMPEG = os.path.join(cwd, 'ffmpeg')
PATH_TO_VID = os.path.join(cwd, 'vid/nanju_jj.mp4')
cwd = os.path.dirname(cwd)
PATH_TO_OUTPUT = os.path.join(cwd, 'output')

skvideo.setFFmpegPath(PATH_TO_FFMPEG)

video = io.vread(PATH_TO_VID, as_grey=True)
num_frames = video.shape[0]

testblock = utils.Block(video, (860,370), 40, 40)
avg_frames = testblock.blockavg()

reduced_avg_frames = utils.reduce_array(avg_frames, 0)

extrema_count = utils.count_extrema(reduced_avg_frames, 10)
print(extrema_count)

if extrema_count % 2 == 0:
	reps = extrema_count/4
else:
	reps = (extrema_count-1)/4

print(reps)

outputfile = open(PATH_TO_OUTPUT+'/output.txt', 'w')
outputfile.write(f'0000:{int(reps)}')




