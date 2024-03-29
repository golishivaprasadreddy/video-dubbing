from moviepy.editor import VideoFileClip, AudioFileClip

# Paths
video_path = "videoplayback.mp4"
audio_path = "translated_speech.mp3"
output_path = "output_video.mp4"

# Load video and audio clips
video_clip = VideoFileClip(video_path)
audio_clip = AudioFileClip(audio_path)

# Set audio of the video clip to the audio clip
video_clip = video_clip.set_audio(audio_clip)

# Write the result to a file
video_clip.write_videofile(output_path, codec="libx264", audio_codec="aac", temp_audiofile="temp-audio.m4a", remove_temp=True)
