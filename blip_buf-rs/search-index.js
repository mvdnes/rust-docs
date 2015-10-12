var searchIndex = {};
searchIndex['blip_buf'] = {"items":[[0,"","blip_buf","blip_buf is a small waveform synthesis library meant for use in classic video game\nsound chip emulation. It greatly simplifies sound chip emulation code by handling\nall the details of resampling. The emulator merely sets the input clock rate and output\nsample rate, adds waveforms by specifying the clock times where their amplitude changes,\nthen reads the resulting output samples.",null,null],[3,"BlipBuf","","Sample buffer that resamples from input clock rate to output sample rate",null,null],[17,"MAX_RATIO","","Maximum `clock_rate / sample_rate ratio`. For a given `sample_rate`,\n`clock_rate` must not be greater than `sample_rate * MAX_RATIO`.",null,null],[17,"MAX_FRAME","","Maximum number of samples that can be generated from one time frame.",null,null],[11,"new","","Creates new buffer that can hold at most sample_count samples. Sets rates\nso that there are `MAX_RATIO` clocks per sample. Returns pointer to new\nbuffer, or panics if insufficient memory.",0,{"inputs":[{"name":"blipbuf"},{"name":"u32"}],"output":{"name":"blipbuf"}}],[11,"set_rates","","Sets approximate input clock rate and output sample rate. For every\n`clock_rate` input clocks, approximately `sample_rate` samples are generated.",0,{"inputs":[{"name":"blipbuf"},{"name":"f64"},{"name":"f64"}],"output":null}],[11,"clear","","Clears entire buffer. Afterwards, `samples_avail() == 0`.",0,{"inputs":[{"name":"blipbuf"}],"output":null}],[11,"add_delta","","Adds positive/negative delta into buffer at specified clock time.",0,{"inputs":[{"name":"blipbuf"},{"name":"u32"},{"name":"i32"}],"output":null}],[11,"add_delta_fast","","Same as `add_delta()`, but uses faster, lower-quality synthesis.",0,{"inputs":[{"name":"blipbuf"},{"name":"u32"},{"name":"i32"}],"output":null}],[11,"clocks_needed","","Length of time frame, in clocks, needed to make `sample_count` additional\nsamples available.",0,{"inputs":[{"name":"blipbuf"},{"name":"u32"}],"output":{"name":"u32"}}],[11,"end_frame","","Makes input clocks before `clock_duration` available for reading as output\nsamples. Also begins new time frame at `clock_duration`, so that clock time 0 in\nthe new time frame specifies the same clock as `clock_duration` in the old time\nframe specified. Deltas can have been added slightly past `clock_duration` (up to\nhowever many clocks there are in two output samples).",0,{"inputs":[{"name":"blipbuf"},{"name":"u32"}],"output":null}],[11,"samples_avail","","Number of buffered samples available for reading.",0,{"inputs":[{"name":"blipbuf"}],"output":{"name":"u32"}}],[11,"read_samples","","Reads and removes at most `buf.len()` samples and writes them to `buf`. If\n`stereo` is true, writes output to every other element of `buf`, allowing easy\ninterleaving of two buffers into a stereo sample stream. Outputs 16-bit signed\nsamples. Returns number of samples actually read.",0,null],[11,"drop","","",0,{"inputs":[{"name":"blipbuf"}],"output":null}]],"paths":[[3,"BlipBuf"]]};
initSearch(searchIndex);
