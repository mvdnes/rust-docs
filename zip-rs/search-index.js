var N=null,E="",T="t",U="u",searchIndex={};
var R=["datetime","result","option","zipresult","ziparchive","zipfile","compressionmethod","fileoptions","to_owned","clone_into","try_from","try_into","borrow_mut","zip::read","type_id","zip::write","borrow","typeid","to_string","zip::result","default","formatter","CompressionMethod","DateTime","ZipArchive","FileOptions","ZipWriter","ZipError"];

searchIndex["zip"]={"doc":"A basic ZipReader/Writer crate","i":[[3,R[23],"zip","A DateTime field to be used for storing timestamps in a…",N,N],[4,R[22],E,"Compression methods for the contents of a ZIP file.",N,N],[13,"Stored",E,"The file is stored (no compression)",0,N],[13,"Deflated",E,"Deflate in pure rust",0,N],[13,"Bzip2",E,"File is compressed using BZIP2 algorithm",0,N],[13,"Unsupported",E,"Unsupported compression method",0,N],[11,"from_msdos",E,"Converts an msdos (u16, u16) pair to a DateTime object",1,[[["u16"]],[R[0]]]],[11,"from_date_and_time",E,"Constructs a DateTime from a specific date and time",1,[[["u16"],["u8"]],[[R[0]],[R[1],[R[0]]]]]],[11,"from_time",E,"Converts a ::time::Tm object to a DateTime",1,[[["tm"]],[[R[0]],[R[1],[R[0]]]]]],[11,"timepart",E,"Gets the time portion of this datetime in the msdos…",1,[[["self"]],["u16"]]],[11,"datepart",E,"Gets the date portion of this datetime in the msdos…",1,[[["self"]],["u16"]]],[11,"to_time",E,"Converts the datetime to a Tm structure",1,[[["self"]],["tm"]]],[11,"year",E,"Get the year. There is no epoch, i.e. 2018 will be…",1,[[["self"]],["u16"]]],[11,"month",E,"Get the month, where 1 = january and 12 = december",1,[[["self"]],["u8"]]],[11,"day",E,"Get the day",1,[[["self"]],["u8"]]],[11,"hour",E,"Get the hour",1,[[["self"]],["u8"]]],[11,"minute",E,"Get the minute",1,[[["self"]],["u8"]]],[11,"second",E,"Get the second",1,[[["self"]],["u8"]]],[0,"read",E,"Structs for reading a ZIP archive",N,N],[3,R[24],R[13],"Wrapper for reading the contents of a ZIP file.",N,N],[3,"ZipFile",E,"A struct for reading a zip file",N,N],[5,"read_zipfile_from_stream",E,"Read ZipFile structures from a non-seekable reader.",N,[[["r"]],[[R[2],[R[5]]],[R[3],[R[2]]]]]],[11,"new",E,"Opens a Zip archive and parses the central directory",2,[[["r"]],[[R[3],[R[4]]],[R[4]]]]],[11,"len",E,"Number of files contained in this zip.",2,[[["self"]],["usize"]]],[11,"offset",E,"Get the offset from the beginning of the underlying reader…",2,[[["self"]],["u64"]]],[11,"by_name",E,"Search for a file entry by name",2,[[["self"],["str"]],[[R[5]],[R[3],[R[5]]]]]],[11,"by_index",E,"Get a contained file by index",2,[[["self"],["usize"]],[[R[5]],[R[3],[R[5]]]]]],[11,"into_inner",E,"Unwrap and return the inner reader object",2,[[],["r"]]],[11,"version_made_by",E,"Get the version of the file",3,[[["self"]]]],[11,"name",E,"Get the name of the file",3,[[["self"]],["str"]]],[11,"name_raw",E,"Get the name of the file, in the raw (internal) byte…",3,[[["self"]]]],[11,"sanitized_name",E,"Get the name of the file in a sanitized form. It truncates…",3,[[["self"]],["pathbuf"]]],[11,"comment",E,"Get the comment of the file",3,[[["self"]],["str"]]],[11,"compression",E,"Get the compression method used to store the file",3,[[["self"]],[R[6]]]],[11,"compressed_size",E,"Get the size of the file in the archive",3,[[["self"]],["u64"]]],[11,"size",E,"Get the size of the file when uncompressed",3,[[["self"]],["u64"]]],[11,"last_modified",E,"Get the time the file was last modified",3,[[["self"]],[R[0]]]],[11,"is_dir",E,"Returns whether the file is actually a directory",3,[[["self"]],["bool"]]],[11,"is_file",E,"Returns whether the file is a regular file",3,[[["self"]],["bool"]]],[11,"unix_mode",E,"Get unix mode for the file",3,[[["self"]],[["u32"],[R[2],["u32"]]]]],[11,"crc32",E,"Get the CRC32 hash of the original file",3,[[["self"]],["u32"]]],[11,"data_start",E,"Get the starting offset of the data of the compressed file",3,[[["self"]],["u64"]]],[11,"from_u16","zip","Converts an u16 to its corresponding CompressionMethod",0,[[["u16"]],[R[6]]]],[11,"to_u16",E,"Converts a CompressionMethod to a u16",0,[[],["u16"]]],[0,"write",E,"Structs for creating a new zip archive",N,N],[3,R[26],R[15],"Generator for ZIP files.",N,N],[3,R[25],E,"Metadata for a file to be written",N,N],[11,R[20],E,"Construct a new FileOptions object",4,[[],[R[7]]]],[11,"compression_method",E,"Set the compression method for the new file",4,[[[R[6]]],[R[7]]]],[11,"last_modified_time",E,"Set the last modified time",4,[[[R[0]]],[R[7]]]],[11,"unix_permissions",E,"Set the permissions for the new file.",4,[[["u32"]],[R[7]]]],[11,"new",E,"Initializes the ZipWriter.",5,[[["w"]],["zipwriter"]]],[11,"start_file",E,"Starts a file.",5,[[["self"],["s"],[R[7]]],[R[3]]]],[11,"start_file_from_path",E,"Starts a file, taking a Path as argument.",5,[[["self"],["path"],[R[7]]],[R[3]]]],[11,"add_directory",E,"Add a directory entry.",5,[[["self"],["s"],[R[7]]],[R[3]]]],[11,"add_directory_from_path",E,"Add a directory entry, taking a Path as argument.",5,[[["self"],["path"],[R[7]]],[R[3]]]],[11,"finish",E,"Finish the last file and write all other zip-structures",5,[[["self"]],[R[3]]]],[0,R[1],"zip","Error types that can be emitted from this library",N,N],[4,R[27],R[19],"Error type for Zip",N,N],[13,"Io",E,"An Error caused by I/O",6,N],[13,"InvalidArchive",E,"This file is probably not a zip archive",6,N],[13,"UnsupportedArchive",E,"This archive is not supported",6,N],[13,"FileNotFound",E,"The requested file could not be found in the archive",6,N],[6,"ZipResult",E,"Generic result type with ZipError as its error variant",N,N],[11,"from","zip",E,1,[[[T]],[T]]],[11,"into",E,E,1,[[],[U]]],[11,R[8],E,E,1,[[["self"]],[T]]],[11,R[9],E,E,1,[[[T],["self"]]]],[11,R[10],E,E,1,[[[U]],[R[1]]]],[11,R[11],E,E,1,[[],[R[1]]]],[11,R[12],E,E,1,[[["self"]],[T]]],[11,R[16],E,E,1,[[["self"]],[T]]],[11,R[14],E,E,1,[[["self"]],[R[17]]]],[11,R[18],E,E,0,[[["self"]],["string"]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[],[U]]],[11,R[8],E,E,0,[[["self"]],[T]]],[11,R[9],E,E,0,[[[T],["self"]]]],[11,R[10],E,E,0,[[[U]],[R[1]]]],[11,R[11],E,E,0,[[],[R[1]]]],[11,R[12],E,E,0,[[["self"]],[T]]],[11,R[16],E,E,0,[[["self"]],[T]]],[11,R[14],E,E,0,[[["self"]],[R[17]]]],[11,"from",R[13],E,2,[[[T]],[T]]],[11,"into",E,E,2,[[],[U]]],[11,R[8],E,E,2,[[["self"]],[T]]],[11,R[9],E,E,2,[[[T],["self"]]]],[11,R[10],E,E,2,[[[U]],[R[1]]]],[11,R[11],E,E,2,[[],[R[1]]]],[11,R[12],E,E,2,[[["self"]],[T]]],[11,R[16],E,E,2,[[["self"]],[T]]],[11,R[14],E,E,2,[[["self"]],[R[17]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,"into",E,E,3,[[],[U]]],[11,R[10],E,E,3,[[[U]],[R[1]]]],[11,R[11],E,E,3,[[],[R[1]]]],[11,R[12],E,E,3,[[["self"]],[T]]],[11,R[16],E,E,3,[[["self"]],[T]]],[11,R[14],E,E,3,[[["self"]],[R[17]]]],[11,"read_u64",E,E,3,[[["self"]],[["error"],[R[1],["u64","error"]],["u64"]]]],[11,"read_u32",E,E,3,[[["self"]],[["u32"],["error"],[R[1],["u32","error"]]]]],[11,"read_u16",E,E,3,[[["self"]],[["u16"],["error"],[R[1],["u16","error"]]]]],[11,"read_u8",E,E,3,[[["self"]],[["error"],[R[1],["u8","error"]],["u8"]]]],[11,"read_i64",E,E,3,[[["self"]],[["i64"],[R[1],["i64","error"]],["error"]]]],[11,"read_i32",E,E,3,[[["self"]],[["error"],[R[1],["i32","error"]],["i32"]]]],[11,"read_i16",E,E,3,[[["self"]],[["error"],["i16"],[R[1],["i16","error"]]]]],[11,"read_i8",E,E,3,[[["self"]],[[R[1],["i8","error"]],["i8"],["error"]]]],[11,"read_f64",E,E,3,[[["self"]],[["f64"],[R[1],["f64","error"]],["error"]]]],[11,"read_f32",E,E,3,[[["self"]],[["f32"],[R[1],["f32","error"]],["error"]]]],[11,"read_exact",E,E,3,[[["self"],["usize"]],[[R[1],["vec","error"]],["error"],["vec",["u8"]]]]],[11,"from",R[15],E,5,[[[T]],[T]]],[11,"into",E,E,5,[[],[U]]],[11,R[10],E,E,5,[[[U]],[R[1]]]],[11,R[11],E,E,5,[[],[R[1]]]],[11,R[12],E,E,5,[[["self"]],[T]]],[11,R[16],E,E,5,[[["self"]],[T]]],[11,R[14],E,E,5,[[["self"]],[R[17]]]],[11,"write_u64",E,E,5,[[["self"],["u64"]],[[R[1],["error"]],["error"]]]],[11,"write_u32",E,E,5,[[["self"],["u32"]],[[R[1],["error"]],["error"]]]],[11,"write_u16",E,E,5,[[["self"],["u16"]],[[R[1],["error"]],["error"]]]],[11,"write_u8",E,E,5,[[["self"],["u8"]],[[R[1],["error"]],["error"]]]],[11,"write_i64",E,E,5,[[["self"],["i64"]],[[R[1],["error"]],["error"]]]],[11,"write_i32",E,E,5,[[["self"],["i32"]],[[R[1],["error"]],["error"]]]],[11,"write_i16",E,E,5,[[["self"],["i16"]],[[R[1],["error"]],["error"]]]],[11,"write_i8",E,E,5,[[["self"],["i8"]],[[R[1],["error"]],["error"]]]],[11,"write_f32",E,E,5,[[["self"],["f32"]],[[R[1],["error"]],["error"]]]],[11,"write_f64",E,E,5,[[["self"],["f64"]],[[R[1],["error"]],["error"]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,"into",E,E,4,[[],[U]]],[11,R[8],E,E,4,[[["self"]],[T]]],[11,R[9],E,E,4,[[[T],["self"]]]],[11,R[10],E,E,4,[[[U]],[R[1]]]],[11,R[11],E,E,4,[[],[R[1]]]],[11,R[12],E,E,4,[[["self"]],[T]]],[11,R[16],E,E,4,[[["self"]],[T]]],[11,R[14],E,E,4,[[["self"]],[R[17]]]],[11,R[18],R[19],E,6,[[["self"]],["string"]]],[11,"from",E,E,6,[[[T]],[T]]],[11,"into",E,E,6,[[],[U]]],[11,R[10],E,E,6,[[[U]],[R[1]]]],[11,R[11],E,E,6,[[],[R[1]]]],[11,R[12],E,E,6,[[["self"]],[T]]],[11,R[16],E,E,6,[[["self"]],[T]]],[11,R[14],E,E,6,[[["self"]],[R[17]]]],[11,R[20],"zip","Constructs an 'default' datetime of 1980-01-01 00:00:00",1,[[],[R[0]]]],[11,R[20],R[15],E,4,[[],["self"]]],[11,"clone","zip",E,1,[[["self"]],[R[0]]]],[11,"clone",R[13],E,2,[[["self"]],[R[4]]]],[11,"clone","zip",E,0,[[["self"]],[R[6]]]],[11,"clone",R[15],E,4,[[["self"]],[R[7]]]],[11,"from",R[19],E,6,[[["error"]],["ziperror"]]],[11,"drop",R[13],E,3,[[["self"]]]],[11,"drop",R[15],E,5,[[["self"]]]],[11,"eq","zip",E,0,[[[R[6]],["self"]],["bool"]]],[11,"ne",E,E,0,[[[R[6]],["self"]],["bool"]]],[11,"fmt",E,E,1,[[["self"],[R[21]]],[R[1]]]],[11,"fmt",R[13],E,2,[[["self"],[R[21]]],[R[1]]]],[11,"fmt","zip",E,0,[[["self"],[R[21]]],[R[1]]]],[11,"fmt",R[19],E,6,[[["self"],[R[21]]],[R[1]]]],[11,"fmt","zip",E,0,[[["self"],[R[21]]],[R[1]]]],[11,"fmt",R[19],E,6,[[["self"],[R[21]]],[[R[1],["error"]],["error"]]]],[11,"write",R[15],E,5,[[["self"]],[["usize"],[R[1],["usize"]]]]],[11,"flush",E,E,5,[[["self"]],[R[1]]]],[11,"read",R[13],E,3,[[["self"]],[["usize"],[R[1],["usize"]]]]],[11,"description",R[19],E,6,[[["self"]],["str"]]],[11,"cause",E,E,6,[[["self"]],[[R[2],["error"]],["error"]]]]],"p":[[4,R[22]],[3,R[23]],[3,R[24]],[3,"ZipFile"],[3,R[25]],[3,R[26]],[4,R[27]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);