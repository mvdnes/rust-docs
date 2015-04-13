var searchIndex = {};
searchIndex['portaudio'] = {"items":[[0,"","portaudio","PortAudio bindings for Rust",null,null],[4,"PaError","","Enum for all possible errors given by PortAudio",null,null],[13,"NotInitialized","","",0,null],[13,"UnanticipatedHostError","","",0,null],[13,"InvalidChannelCount","","",0,null],[13,"InvalidSampleRate","","",0,null],[13,"InvalidDevice","","",0,null],[13,"InvalidFlag","","",0,null],[13,"SampleFormatNotSupported","","",0,null],[13,"BadIODeviceCombination","","",0,null],[13,"InsufficientMemory","","",0,null],[13,"BufferTooBig","","",0,null],[13,"BufferTooSmall","","",0,null],[13,"NullCallback","","",0,null],[13,"BadStreamPtr","","",0,null],[13,"TimedOut","","",0,null],[13,"InternalError","","",0,null],[13,"DeviceUnavailable","","",0,null],[13,"IncompatibleHostApiSpecificStreamInfo","","",0,null],[13,"StreamIsStopped","","",0,null],[13,"StreamIsNotStopped","","",0,null],[13,"InputOverflowed","","",0,null],[13,"OutputUnderflowed","","",0,null],[13,"HostApiNotFound","","",0,null],[13,"InvalidHostApi","","",0,null],[13,"CanNotReadFromACallbackStream","","",0,null],[13,"CanNotWriteToACallbackStream","","",0,null],[13,"CanNotReadFromAnOutputOnlyStream","","",0,null],[13,"CanNotWriteToAnInputOnlyStream","","",0,null],[13,"IncompatibleStreamHostApi","","",0,null],[13,"BadBufferPtr","","",0,null],[13,"UnknownError","","Added variant for when FromPrimitive returns None",0,null],[5,"initialize","","Initialize the PortAudio API",null,{"inputs":[],"output":{"name":"paresult"}}],[5,"terminate","","Terminate the PortAudio API",null,{"inputs":[],"output":{"name":"paresult"}}],[5,"version","","PortAudio version",null,{"inputs":[],"output":{"name":"i32"}}],[5,"version_text","","Human-readable PortAudio version",null,{"inputs":[],"output":{"name":"string"}}],[0,"stream","","Contains the Stream class and associated values",null,null],[3,"StreamTimeInfo","portaudio::stream","Time information for various stream related values",null,null],[12,"input_adc_time","","Timestamp for the ADC capture time of the first frame",1,null],[12,"current_time","","Timestamp that the callback was invoked",1,null],[12,"output_dac_time","","Timestamp for the DAC output time of the first frame",1,null],[3,"StreamCallbackFlags","","Flags indicating the status of the callback",null,null],[3,"StreamFlags","","Flags used to control the behavior of a stream",null,null],[3,"Stream","","An object for an PortAudio stream",null,null],[3,"StreamParameters","","Stream parameters to be used with Stream::open()",null,null],[12,"device","","Index of the device to use",2,null],[12,"channel_count","","Requested number of channels",2,null],[12,"suggested_latency","","Desired latency of the stream",2,null],[12,"data","","Sample data to be used in the stream",2,null],[3,"StreamInfo","","Information about the actual latency and sample rate values the stream uses",null,null],[12,"input_latency","","Input latency",3,null],[12,"output_latency","","Output latency",3,null],[12,"sample_rate","","Sample rate",3,null],[4,"StreamCallbackResult","","Allowable return values for a StreamCallback",null,null],[13,"Continue","","Continue invoking the callback",4,null],[13,"Complete","","Stop invoking the callback and finish once everything has played",4,null],[13,"Abort","","Stop invoking the callback and finish as soon as possible",4,null],[5,"is_format_supported","","Returns Ok when the StreamParameters are supported. This ignores the latency field.",null,{"inputs":[{"name":"streamparameters"},{"name":"streamparameters"},{"name":"f64"}],"output":{"name":"paresult"}}],[6,"StreamCallback","","Callback to consume, process or generate audio",null,null],[6,"StreamFinishedCallback","","Callback to be fired when a StreamCallback is stopped",null,null],[17,"INPUT_UNDERFLOW","","Indicates that the callback has inserted one or more zeroes since not enough data was available",null,null],[17,"INPUT_OVERFLOW","","Indicates that the callback has discarded some data",null,null],[17,"OUTPUT_UNDERFLOW","","Indicates that extra data was inserted in the output since there was not engough available",null,null],[17,"OUTPUT_OVERFLOW","","Indicates that certain data was discarded since there was no room",null,null],[17,"PRIMING_OUTPUT","","Some or all of the output data will be used to prime the stream, input data may be zero",null,null],[17,"CLIP_OFF","","Disable clipping of out of range samples",null,null],[17,"DITHER_OFF","","Disable dithering",null,null],[17,"NEVER_DROP_INPUT","","Request that a full duplex stream will not discard overflowed input samples. The frames_per_buffer must be set to unspecified (0)",null,null],[17,"PRIME_OUTPUT_BUFFERS_USING_STREAM_CALLBACK","","Call the stream callback to fill initial output buffers, rather than priming the buffers with silence",null,null],[17,"PLATFORM_SPECIFIC","","Range for platform specific flags. Not all of the upper 16 bits need to be set at the same time.",null,null],[17,"FRAMES_PER_BUFFER_UNSPECIFIED","","Argument to Stream::open() or Stream::open_default() to allow PortAudio itself determine the\noptimal number of frames per buffer. This number may differ each time the callback is called.",null,null],[8,"SampleType","","Types that are allowed to be used as samples in a Stream",null,null],[10,"sample_format","","Should return the PortAudio flag which corresponds to the type",5,{"inputs":[{"name":"sampletype"}],"output":{"name":"u64"}}],[11,"clone","","",4,{"inputs":[{"name":"streamcallbackresult"}],"output":{"name":"streamcallbackresult"}}],[11,"clone","","",1,{"inputs":[{"name":"streamtimeinfo"}],"output":{"name":"streamtimeinfo"}}],[11,"hash","","",6,null],[11,"cmp","","",6,{"inputs":[{"name":"streamcallbackflags"},{"name":"streamcallbackflags"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",6,{"inputs":[{"name":"streamcallbackflags"},{"name":"streamcallbackflags"}],"output":{"name":"option"}}],[11,"lt","","",6,{"inputs":[{"name":"streamcallbackflags"},{"name":"streamcallbackflags"}],"output":{"name":"bool"}}],[11,"le","","",6,{"inputs":[{"name":"streamcallbackflags"},{"name":"streamcallbackflags"}],"output":{"name":"bool"}}],[11,"gt","","",6,{"inputs":[{"name":"streamcallbackflags"},{"name":"streamcallbackflags"}],"output":{"name":"bool"}}],[11,"ge","","",6,{"inputs":[{"name":"streamcallbackflags"},{"name":"streamcallbackflags"}],"output":{"name":"bool"}}],[11,"clone","","",6,{"inputs":[{"name":"streamcallbackflags"}],"output":{"name":"streamcallbackflags"}}],[11,"eq","","",6,{"inputs":[{"name":"streamcallbackflags"},{"name":"streamcallbackflags"}],"output":{"name":"bool"}}],[11,"ne","","",6,{"inputs":[{"name":"streamcallbackflags"},{"name":"streamcallbackflags"}],"output":{"name":"bool"}}],[11,"empty","","Returns an empty set of flags.",6,{"inputs":[{"name":"streamcallbackflags"}],"output":{"name":"streamcallbackflags"}}],[11,"all","","Returns the set containing all flags.",6,{"inputs":[{"name":"streamcallbackflags"}],"output":{"name":"streamcallbackflags"}}],[11,"bits","","Returns the raw value of the flags currently stored.",6,{"inputs":[{"name":"streamcallbackflags"}],"output":{"name":"u64"}}],[11,"from_bits","","Convert from underlying bit representation, unless that\nrepresentation contains bits that do not correspond to a flag.",6,{"inputs":[{"name":"streamcallbackflags"},{"name":"u64"}],"output":{"name":"option"}}],[11,"from_bits_truncate","","Convert from underlying bit representation, dropping any bits\nthat do not correspond to flags.",6,{"inputs":[{"name":"streamcallbackflags"},{"name":"u64"}],"output":{"name":"streamcallbackflags"}}],[11,"is_empty","","Returns `true` if no flags are currently stored.",6,{"inputs":[{"name":"streamcallbackflags"}],"output":{"name":"bool"}}],[11,"is_all","","Returns `true` if all flags are currently set.",6,{"inputs":[{"name":"streamcallbackflags"}],"output":{"name":"bool"}}],[11,"intersects","","Returns `true` if there are flags common to both `self` and `other`.",6,{"inputs":[{"name":"streamcallbackflags"},{"name":"streamcallbackflags"}],"output":{"name":"bool"}}],[11,"contains","","Returns `true` all of the flags in `other` are contained within `self`.",6,{"inputs":[{"name":"streamcallbackflags"},{"name":"streamcallbackflags"}],"output":{"name":"bool"}}],[11,"insert","","Inserts the specified flags in-place.",6,{"inputs":[{"name":"streamcallbackflags"},{"name":"streamcallbackflags"}],"output":null}],[11,"remove","","Removes the specified flags in-place.",6,{"inputs":[{"name":"streamcallbackflags"},{"name":"streamcallbackflags"}],"output":null}],[11,"toggle","","Toggles the specified flags in-place.",6,{"inputs":[{"name":"streamcallbackflags"},{"name":"streamcallbackflags"}],"output":null}],[6,"Output","","",null,null],[11,"bitor","","Returns the union of the two sets of flags.",6,{"inputs":[{"name":"streamcallbackflags"},{"name":"streamcallbackflags"}],"output":{"name":"streamcallbackflags"}}],[6,"Output","","",null,null],[11,"bitxor","","Returns the left flags, but with all the right flags toggled.",6,{"inputs":[{"name":"streamcallbackflags"},{"name":"streamcallbackflags"}],"output":{"name":"streamcallbackflags"}}],[6,"Output","","",null,null],[11,"bitand","","Returns the intersection between the two sets of flags.",6,{"inputs":[{"name":"streamcallbackflags"},{"name":"streamcallbackflags"}],"output":{"name":"streamcallbackflags"}}],[6,"Output","","",null,null],[11,"sub","","Returns the set difference of the two sets of flags.",6,{"inputs":[{"name":"streamcallbackflags"},{"name":"streamcallbackflags"}],"output":{"name":"streamcallbackflags"}}],[6,"Output","","",null,null],[11,"not","","Returns the complement of this set of flags.",6,{"inputs":[{"name":"streamcallbackflags"}],"output":{"name":"streamcallbackflags"}}],[11,"hash","","",7,null],[11,"cmp","","",7,{"inputs":[{"name":"streamflags"},{"name":"streamflags"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",7,{"inputs":[{"name":"streamflags"},{"name":"streamflags"}],"output":{"name":"option"}}],[11,"lt","","",7,{"inputs":[{"name":"streamflags"},{"name":"streamflags"}],"output":{"name":"bool"}}],[11,"le","","",7,{"inputs":[{"name":"streamflags"},{"name":"streamflags"}],"output":{"name":"bool"}}],[11,"gt","","",7,{"inputs":[{"name":"streamflags"},{"name":"streamflags"}],"output":{"name":"bool"}}],[11,"ge","","",7,{"inputs":[{"name":"streamflags"},{"name":"streamflags"}],"output":{"name":"bool"}}],[11,"clone","","",7,{"inputs":[{"name":"streamflags"}],"output":{"name":"streamflags"}}],[11,"eq","","",7,{"inputs":[{"name":"streamflags"},{"name":"streamflags"}],"output":{"name":"bool"}}],[11,"ne","","",7,{"inputs":[{"name":"streamflags"},{"name":"streamflags"}],"output":{"name":"bool"}}],[11,"empty","","Returns an empty set of flags.",7,{"inputs":[{"name":"streamflags"}],"output":{"name":"streamflags"}}],[11,"all","","Returns the set containing all flags.",7,{"inputs":[{"name":"streamflags"}],"output":{"name":"streamflags"}}],[11,"bits","","Returns the raw value of the flags currently stored.",7,{"inputs":[{"name":"streamflags"}],"output":{"name":"u64"}}],[11,"from_bits","","Convert from underlying bit representation, unless that\nrepresentation contains bits that do not correspond to a flag.",7,{"inputs":[{"name":"streamflags"},{"name":"u64"}],"output":{"name":"option"}}],[11,"from_bits_truncate","","Convert from underlying bit representation, dropping any bits\nthat do not correspond to flags.",7,{"inputs":[{"name":"streamflags"},{"name":"u64"}],"output":{"name":"streamflags"}}],[11,"is_empty","","Returns `true` if no flags are currently stored.",7,{"inputs":[{"name":"streamflags"}],"output":{"name":"bool"}}],[11,"is_all","","Returns `true` if all flags are currently set.",7,{"inputs":[{"name":"streamflags"}],"output":{"name":"bool"}}],[11,"intersects","","Returns `true` if there are flags common to both `self` and `other`.",7,{"inputs":[{"name":"streamflags"},{"name":"streamflags"}],"output":{"name":"bool"}}],[11,"contains","","Returns `true` all of the flags in `other` are contained within `self`.",7,{"inputs":[{"name":"streamflags"},{"name":"streamflags"}],"output":{"name":"bool"}}],[11,"insert","","Inserts the specified flags in-place.",7,{"inputs":[{"name":"streamflags"},{"name":"streamflags"}],"output":null}],[11,"remove","","Removes the specified flags in-place.",7,{"inputs":[{"name":"streamflags"},{"name":"streamflags"}],"output":null}],[11,"toggle","","Toggles the specified flags in-place.",7,{"inputs":[{"name":"streamflags"},{"name":"streamflags"}],"output":null}],[6,"Output","","",null,null],[11,"bitor","","Returns the union of the two sets of flags.",7,{"inputs":[{"name":"streamflags"},{"name":"streamflags"}],"output":{"name":"streamflags"}}],[6,"Output","","",null,null],[11,"bitxor","","Returns the left flags, but with all the right flags toggled.",7,{"inputs":[{"name":"streamflags"},{"name":"streamflags"}],"output":{"name":"streamflags"}}],[6,"Output","","",null,null],[11,"bitand","","Returns the intersection between the two sets of flags.",7,{"inputs":[{"name":"streamflags"},{"name":"streamflags"}],"output":{"name":"streamflags"}}],[6,"Output","","",null,null],[11,"sub","","Returns the set difference of the two sets of flags.",7,{"inputs":[{"name":"streamflags"},{"name":"streamflags"}],"output":{"name":"streamflags"}}],[6,"Output","","",null,null],[11,"not","","Returns the complement of this set of flags.",7,{"inputs":[{"name":"streamflags"}],"output":{"name":"streamflags"}}],[11,"open_default","","Constructs a stream using the default input and output devices",8,{"inputs":[{"name":"stream"},{"name":"u32"},{"name":"u32"},{"name":"f64"},{"name":"u64"},{"name":"option"}],"output":{"name":"result"}}],[11,"open","","Constructs a stream with the desired input and output specifications",8,{"inputs":[{"name":"stream"},{"name":"streamparameters"},{"name":"streamparameters"},{"name":"f64"},{"name":"u64"},{"name":"streamflags"},{"name":"option"}],"output":{"name":"result"}}],[11,"start","","Starts the stream",8,{"inputs":[{"name":"stream"}],"output":{"name":"paresult"}}],[11,"stop","","Stops the stream. It will block untill all audio has finished playing",8,{"inputs":[{"name":"stream"}],"output":{"name":"paresult"}}],[11,"abort","","Stop stream immediately without waiting for the buffers to complete",8,{"inputs":[{"name":"stream"}],"output":{"name":"paresult"}}],[11,"is_stopped","","Returns wether the stream is stopped",8,{"inputs":[{"name":"stream"}],"output":{"name":"result"}}],[11,"is_active","","Returns wether the stream is active",8,{"inputs":[{"name":"stream"}],"output":{"name":"result"}}],[11,"num_read_available","","Get the number of frames that can be read from the stream without waiting",8,{"inputs":[{"name":"stream"}],"output":{"name":"result"}}],[11,"num_write_available","","Get the number of frames that can be written to the stream without waiting",8,{"inputs":[{"name":"stream"}],"output":{"name":"result"}}],[11,"write","","Write the given buffer to the stream. This function blocks",8,null],[11,"read","","Reads the requested number of frames from the input devices. This function blocks until\nthe whole buffer has been filled.",8,{"inputs":[{"name":"stream"},{"name":"u32"}],"output":{"name":"result"}}],[11,"cpu_load","","Returns the cpu load the stream callback consumes. This will return 0.0 if the stream uses\nblocking read/write, or if an error occured.",8,{"inputs":[{"name":"stream"}],"output":{"name":"f64"}}],[11,"time","","Get the current timestamp of the stream",8,{"inputs":[{"name":"stream"}],"output":{"name":"duration"}}],[11,"info","","Get the actual latencies and sample rate",8,{"inputs":[{"name":"stream"}],"output":{"name":"option"}}],[11,"set_finished_callback","","Set a callback which is to be called when the StreamCallback finishes",8,{"inputs":[{"name":"stream"},{"name":"streamfinishedcallback"}],"output":{"name":"paresult"}}],[11,"unset_finished_callback","","Remove any previously attached finish callback",8,{"inputs":[{"name":"stream"}],"output":{"name":"paresult"}}],[11,"drop","","",8,{"inputs":[{"name":"stream"}],"output":null}],[11,"clone","","",2,{"inputs":[{"name":"streamparameters"}],"output":{"name":"streamparameters"}}],[11,"clone","","",3,{"inputs":[{"name":"streaminfo"}],"output":{"name":"streaminfo"}}],[11,"clone","portaudio","",0,{"inputs":[{"name":"paerror"}],"output":{"name":"paerror"}}],[11,"eq","","",0,{"inputs":[{"name":"paerror"},{"name":"paerror"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"paerror"},{"name":"paerror"}],"output":{"name":"bool"}}],[11,"from_i64","","",0,{"inputs":[{"name":"paerror"},{"name":"i64"}],"output":{"name":"option"}}],[11,"from_u64","","",0,{"inputs":[{"name":"paerror"},{"name":"u64"}],"output":{"name":"option"}}],[11,"from_i32","","Get the enum value corresponding to the given i32",0,{"inputs":[{"name":"paerror"},{"name":"i32"}],"output":{"name":"paerror"}}],[11,"fmt","","",0,{"inputs":[{"name":"paerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"paerror"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"hostapi","","Info module for available audio host API's",null,null],[3,"HostApiInfo","portaudio::hostapi","Information about a specific host API",null,null],[12,"api_type","","The type of the API",9,null],[12,"name","","Human-readable name of the API",9,null],[12,"device_count","","Number of devices this API has",9,null],[12,"default_input","","Default input device of the API. Is None if there is no input device available.",9,null],[12,"default_output","","Default output device of the API. Is None if there is no output device available.",9,null],[3,"HostErrorInfo","","Error info obtained by get_last_error",null,null],[12,"code","","The error code given",10,null],[12,"text","","A human readable error message",10,null],[12,"api_type","","The type of the API that produced the error",10,null],[4,"HostApiType","","Possible Host API types",null,null],[13,"InDevelopment","","",11,null],[13,"DirectSound","","",11,null],[13,"MME","","",11,null],[13,"ASIO","","",11,null],[13,"SoundManager","","",11,null],[13,"CoreAudio","","",11,null],[13,"OSS","","",11,null],[13,"ALSA","","",11,null],[13,"AL","","",11,null],[13,"BeOS","","",11,null],[13,"WDMKS","","",11,null],[13,"JACK","","",11,null],[13,"WASAPI","","",11,null],[13,"AudioScienceHPI","","",11,null],[13,"Unknown","","Added for when FromPrimitive returns None",11,null],[5,"get_last_error","","Return information about the last host error encountered.",null,{"inputs":[],"output":{"name":"option"}}],[5,"get_count","","Get the number of host API's available",null,{"inputs":[],"output":{"name":"result"}}],[5,"get_default_index","","Get the default Host API",null,{"inputs":[],"output":{"name":"result"}}],[5,"get_info","","Get information about a specific Host API",null,{"inputs":[{"name":"hostapiindex"}],"output":{"name":"option"}}],[6,"HostApiIndex","","Index number of a Host API",null,null],[11,"clone","","",11,{"inputs":[{"name":"hostapitype"}],"output":{"name":"hostapitype"}}],[11,"to_api_index","","Convert a static host API unique identifier, into a runtime host API index.",11,{"inputs":[{"name":"hostapitype"}],"output":{"name":"result"}}],[11,"from_u32","","Get the enum value corresponding to the u32",11,{"inputs":[{"name":"hostapitype"},{"name":"u32"}],"output":{"name":"hostapitype"}}],[0,"device","portaudio","Info about connected audio devices",null,null],[3,"DeviceInfo","portaudio::device","Information for a specific device",null,null],[12,"name","","Human readable name",12,null],[12,"host_api","","Index of the host API this device belongs to",12,null],[12,"max_input_channels","","Maximal number of input channels that can be used",12,null],[12,"max_output_channels","","Maximal number of ouput channels that can be used",12,null],[12,"default_low_input_latency","","Default input latency for interactive performance",12,null],[12,"default_low_output_latency","","Default output latency for interactive performance",12,null],[12,"default_high_input_latency","","Default input latency for robust non-interactive applications",12,null],[12,"default_high_output_latency","","Default output latency for robust non-interactive applications",12,null],[12,"default_sample_rate","","Default sample rate",12,null],[5,"get_count","","Retrieve the number of available devices.",null,{"inputs":[],"output":{"name":"result"}}],[5,"get_default_input_index","","Retrieve the index of the default input device",null,{"inputs":[],"output":{"name":"result"}}],[5,"get_default_output_index","","Retrieve the index of the default output device",null,{"inputs":[],"output":{"name":"result"}}],[5,"get_info","","Get info about a particular device",null,{"inputs":[{"name":"deviceindex"}],"output":{"name":"option"}}],[5,"get_from_host_api_device_index","","Converts a device index from a specific host API to a global device index",null,{"inputs":[{"name":"hostapiindex"},{"name":"u32"}],"output":{"name":"result"}}],[6,"DeviceIndex","","Index of a Device",null,null],[6,"PaResult","portaudio","A result type wrapping PaError.",null,null]],"paths":[[4,"PaError"],[3,"StreamTimeInfo"],[3,"StreamParameters"],[3,"StreamInfo"],[4,"StreamCallbackResult"],[8,"SampleType"],[3,"StreamCallbackFlags"],[3,"StreamFlags"],[3,"Stream"],[3,"HostApiInfo"],[3,"HostErrorInfo"],[4,"HostApiType"],[3,"DeviceInfo"]]};
initSearch(searchIndex);
