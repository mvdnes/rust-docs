initSidebarItems({"type":[["StreamCallback","Callback to consume, process or generate audio"],["StreamFinishedCallback","Callback to be fired when a StreamCallback is stopped"]],"struct":[["Stream","An object for an PortAudio stream"],["StreamCallbackFlags","Flags indicating the status of the callback"],["StreamFlags","Flags used to control the behavior of a stream"],["StreamInfo","Information about the actual latency and sample rate values the stream uses"],["StreamParameters","Stream parameters to be used with Stream::open()"],["StreamTimeInfo","Time information for various stream related values"]],"enum":[["StreamCallbackResult","Allowable return values for a StreamCallback"]],"constant":[["CLIP_OFF","Disable clipping of out of range samples"],["DITHER_OFF","Disable dithering"],["FRAMES_PER_BUFFER_UNSPECIFIED","Argument to Stream::open() or Stream::open_default() to allow PortAudio itself determine the optimal number of frames per buffer. This number may differ each time the callback is called."],["INPUT_OVERFLOW","Indicates that the callback has discarded some data"],["INPUT_UNDERFLOW","Indicates that the callback has inserted one or more zeroes since not enough data was available"],["NEVER_DROP_INPUT","Request that a full duplex stream will not discard overflowed input samples. The frames_per_buffer must be set to unspecified (0)"],["OUTPUT_OVERFLOW","Indicates that certain data was discarded since there was no room"],["OUTPUT_UNDERFLOW","Indicates that extra data was inserted in the output since there was not engough available"],["PLATFORM_SPECIFIC","Range for platform specific flags. Not all of the upper 16 bits need to be set at the same time."],["PRIME_OUTPUT_BUFFERS_USING_STREAM_CALLBACK","Call the stream callback to fill initial output buffers, rather than priming the buffers with silence"],["PRIMING_OUTPUT","Some or all of the output data will be used to prime the stream, input data may be zero"]],"fn":[["is_format_supported","Returns Ok when the StreamParameters are supported. This ignores the latency field."]],"trait":[["SampleType","Types that are allowed to be used as samples in a Stream"]]});