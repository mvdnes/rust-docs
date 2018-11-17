var N = null;var searchIndex = {};
searchIndex["zip"]={"doc":"A basic ZipReader/Writer crate","items":[[3,"DateTime","zip","A DateTime field to be used for storing timestamps in a zip file",N,N],[4,"CompressionMethod","","Compression methods for the contents of a ZIP file.",N,N],[13,"Stored","","The file is stored (no compression)",0,N],[13,"Deflated","","Deflate in pure rust",0,N],[13,"Bzip2","","File is compressed using BZIP2 algorithm",0,N],[13,"Unsupported","","Unsupported compression method",0,N],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"clone","","",1,[[["self"]],["datetime"]]],[11,"default","","Constructs an 'default' datetime of 1980-01-01 00:00:00",1,[[],["datetime"]]],[11,"from_msdos","","Converts an msdos (u16, u16) pair to a DateTime object",1,[[["u16"],["u16"]],["datetime"]]],[11,"from_date_and_time","","Constructs a DateTime from a specific date and time",1,[[["u16"],["u8"],["u8"],["u8"],["u8"],["u8"]],["result",["datetime"]]]],[11,"from_time","","Converts a ::time::Tm object to a DateTime",1,[[["tm"]],["result",["datetime"]]]],[11,"timepart","","Gets the time portion of this datetime in the msdos representation",1,[[["self"]],["u16"]]],[11,"datepart","","Gets the date portion of this datetime in the msdos representation",1,[[["self"]],["u16"]]],[11,"to_time","","Converts the datetime to a Tm structure",1,[[["self"]],["tm"]]],[11,"year","","Get the year. There is no epoch, i.e. 2018 will be returned as 2018.",1,[[["self"]],["u16"]]],[11,"month","","Get the month, where 1 = january and 12 = december",1,[[["self"]],["u8"]]],[11,"day","","Get the day",1,[[["self"]],["u8"]]],[11,"hour","","Get the hour",1,[[["self"]],["u8"]]],[11,"minute","","Get the minute",1,[[["self"]],["u8"]]],[11,"second","","Get the second",1,[[["self"]],["u8"]]],[0,"read","","Structs for reading a ZIP archive",N,N],[3,"ZipArchive","zip::read","Wrapper for reading the contents of a ZIP file.",N,N],[3,"ZipFile","","A struct for reading a zip file",N,N],[5,"read_zipfile_from_stream","","Read ZipFile structures from a non-seekable reader.",N,[[["r"]],["zipresult",["option"]]]],[11,"clone","","",2,[[["self"]],["ziparchive"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"new","","Opens a Zip archive and parses the central directory",2,[[["r"]],["zipresult",["ziparchive"]]]],[11,"len","","Number of files contained in this zip.",2,[[["self"]],["usize"]]],[11,"offset","","Get the offset from the beginning of the underlying reader that this zip begins at, in bytes.",2,[[["self"]],["u64"]]],[11,"by_name","","Search for a file entry by name",2,[[["self"],["str"]],["zipresult",["zipfile"]]]],[11,"by_index","","Get a contained file by index",2,[[["self"],["usize"]],["zipresult",["zipfile"]]]],[11,"into_inner","","Unwrap and return the inner reader object",2,[[["self"]],["r"]]],[11,"version_made_by","","Get the version of the file",3,N],[11,"name","","Get the name of the file",3,[[["self"]],["str"]]],[11,"name_raw","","Get the name of the file, in the raw (internal) byte representation.",3,N],[11,"sanitized_name","","Get the name of the file in a sanitized form. It truncates the name to the first NULL byte, removes a leading '/' and removes '..' parts.",3,[[["self"]],["pathbuf"]]],[11,"comment","","Get the comment of the file",3,[[["self"]],["str"]]],[11,"compression","","Get the compression method used to store the file",3,[[["self"]],["compressionmethod"]]],[11,"compressed_size","","Get the size of the file in the archive",3,[[["self"]],["u64"]]],[11,"size","","Get the size of the file when uncompressed",3,[[["self"]],["u64"]]],[11,"last_modified","","Get the time the file was last modified",3,[[["self"]],["datetime"]]],[11,"unix_mode","","Get unix mode for the file",3,[[["self"]],["option",["u32"]]]],[11,"crc32","","Get the CRC32 hash of the original file",3,[[["self"]],["u32"]]],[11,"data_start","","Get the starting offset of the data of the compressed file",3,[[["self"]],["u64"]]],[11,"read","","",3,N],[11,"drop","","",3,[[["self"]]]],[11,"clone","zip","",0,[[["self"]],["compressionmethod"]]],[11,"eq","","",0,[[["self"],["compressionmethod"]],["bool"]]],[11,"ne","","",0,[[["self"],["compressionmethod"]],["bool"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"from_u16","","Converts an u16 to its corresponding CompressionMethod",0,[[["u16"]],["compressionmethod"]]],[11,"to_u16","","Converts a CompressionMethod to a u16",0,[[["self"]],["u16"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[0,"write","","Structs for creating a new zip archive",N,N],[3,"ZipWriter","zip::write","Generator for ZIP files.",N,N],[3,"FileOptions","","Metadata for a file to be written",N,N],[11,"clone","","",4,[[["self"]],["fileoptions"]]],[11,"default","","Construct a new FileOptions object",4,[[],["fileoptions"]]],[11,"compression_method","","Set the compression method for the new file",4,[[["self"],["compressionmethod"]],["fileoptions"]]],[11,"last_modified_time","","Set the last modified time",4,[[["self"],["datetime"]],["fileoptions"]]],[11,"unix_permissions","","Set the permissions for the new file.",4,[[["self"],["u32"]],["fileoptions"]]],[11,"write","","",5,N],[11,"flush","","",5,[[["self"]],["result"]]],[11,"new","","Initializes the ZipWriter.",5,[[["w"]],["zipwriter"]]],[11,"start_file","","Starts a file.",5,[[["self"],["s"],["fileoptions"]],["zipresult"]]],[11,"add_directory","","Add a directory entry.",5,[[["self"],["s"],["fileoptions"]],["zipresult"]]],[11,"finish","","Finish the last file and write all other zip-structures",5,[[["self"]],["zipresult"]]],[11,"drop","","",5,[[["self"]]]],[0,"result","zip","Error types that can be emitted from this library",N,N],[4,"ZipError","zip::result","Error type for Zip",N,N],[13,"Io","","An Error caused by I/O",6,N],[13,"InvalidArchive","","This file is probably not a zip archive",6,N],[13,"UnsupportedArchive","","This archive is not supported",6,N],[13,"FileNotFound","","The requested file could not be found in the archive",6,N],[6,"ZipResult","","Generic result type with ZipError as its error variant",N,N],[11,"fmt","","",6,[[["self"],["formatter"]],["result"]]],[11,"from","","",6,[[["error"]],["ziperror"]]],[11,"fmt","","",6,[[["self"],["formatter"]],["result",["error"]]]],[11,"description","","",6,[[["self"]],["str"]]],[11,"cause","","",6,[[["self"]],["option",["error"]]]],[11,"to_owned","zip","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,N],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,N],[11,"from","","",0,[[["t"]],["t"]]],[11,"to_string","","",0,[[["self"]],["string"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"to_owned","zip::read","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,N],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"read_u64","","",3,[[["self"]],["result",["u64","error"]]]],[11,"read_u32","","",3,[[["self"]],["result",["u32","error"]]]],[11,"read_u16","","",3,[[["self"]],["result",["u16","error"]]]],[11,"read_u8","","",3,[[["self"]],["result",["u8","error"]]]],[11,"read_i64","","",3,[[["self"]],["result",["i64","error"]]]],[11,"read_i32","","",3,[[["self"]],["result",["i32","error"]]]],[11,"read_i16","","",3,[[["self"]],["result",["i16","error"]]]],[11,"read_i8","","",3,[[["self"]],["result",["i8","error"]]]],[11,"read_f64","","",3,[[["self"]],["result",["f64","error"]]]],[11,"read_f32","","",3,[[["self"]],["result",["f32","error"]]]],[11,"read_exact","","",3,[[["self"],["usize"]],["result",["vec","error"]]]],[11,"from","zip::write","",5,[[["t"]],["t"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"write_u64","","",5,[[["self"],["u64"]],["result",["error"]]]],[11,"write_u32","","",5,[[["self"],["u32"]],["result",["error"]]]],[11,"write_u16","","",5,[[["self"],["u16"]],["result",["error"]]]],[11,"write_u8","","",5,[[["self"],["u8"]],["result",["error"]]]],[11,"write_i64","","",5,[[["self"],["i64"]],["result",["error"]]]],[11,"write_i32","","",5,[[["self"],["i32"]],["result",["error"]]]],[11,"write_i16","","",5,[[["self"],["i16"]],["result",["error"]]]],[11,"write_i8","","",5,[[["self"],["i8"]],["result",["error"]]]],[11,"write_f32","","",5,[[["self"],["f32"]],["result",["error"]]]],[11,"write_f64","","",5,[[["self"],["f64"]],["result",["error"]]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,N],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"from","zip::result","",6,[[["t"]],["t"]]],[11,"to_string","","",6,[[["self"]],["string"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]]],"paths":[[4,"CompressionMethod"],[3,"DateTime"],[3,"ZipArchive"],[3,"ZipFile"],[3,"FileOptions"],[3,"ZipWriter"],[4,"ZipError"]]};
initSearch(searchIndex);
