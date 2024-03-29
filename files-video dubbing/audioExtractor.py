from moviepy.editor import VideoFileClip

def video_to_audio(input_video, output_audio):
    video_clip = VideoFileClip(input_video)
    audio_clip = video_clip.audio

    audio_clip.write_audiofile(output_audio, codec='mp3')  # You can choose a different codec if needed

if __name__ == "__main__":
    import sys
    input_video_file = sys.argv[1]
    output_audio_file = sys.argv[2]
    video_to_audio(input_video_file, output_audio_file)
