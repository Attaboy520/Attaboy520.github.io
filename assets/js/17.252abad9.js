(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{440:function(t,a,s){"use strict";s.r(a);var n=s(24),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"https://www.bilibili.com/video/av584530728/",target:"_blank",rel:"noopener noreferrer"}},[t._v("UE4C++ 向UTexture2D写入数据并生成UAsset资源"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://www.bilibili.com/video/BV1Sf4y1Q7zc",target:"_blank",rel:"noopener noreferrer"}},[t._v("UE4 Image处理工具第一讲：从磁盘读取图片数据转成UTexture2D"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"加载本地文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载本地文件"}},[t._v("#")]),t._v(" 加载本地文件")]),t._v(" "),s("div",{staticClass:"language-C line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//FFileHelper")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Load a binary file to a dynamic array with two uninitialized bytes at end as padding.\n     *\n     * @param Result    Receives the contents of the file\n     * @param Filename  The file to read\n     * @param Flags     Flags to pass to IFileManager::CreateFileReader\n    */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" bool "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("LoadFileToArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" TArray"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("uint8"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" Result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" TCHAR"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uint32 Flags "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Load a binary file to a dynamic array with two uninitialized bytes at end as padding.\n     *\n     * @param Result    Receives the contents of the file\n     * @param Filename  The file to read\n     * @param Flags     Flags to pass to IFileManager::CreateFileReader\n    */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" bool "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("LoadFileToArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" TArray64"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("uint8"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" Result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" TCHAR"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uint32 Flags "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("h2",{attrs:{id:"加载imagewrapper模块并确认有效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载imagewrapper模块并确认有效"}},[t._v("#")]),t._v(" 加载ImageWrapper模块并确认有效")]),t._v(" "),s("div",{staticClass:"language-C line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//FModuleManager")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n     * Loads the specified module, checking to ensure it exists.\n     *\n     * @param InModuleName The base name of the module file.  Should not include path, extension or platform/configuration info.  This is just the "module name" part of the module file name.  Names should be globally unique.\n     * @return The loaded module, or nullptr if the load operation failed.\n     * @see AbandonModule, IsModuleLoaded, LoadModuleChecked, LoadModulePtr, LoadModuleWithFailureReason, UnloadModule\n     */')]),t._v("\n    IModuleInterface"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("LoadModuleChecked")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" FName InModuleName "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h2",{attrs:{id:"使用imagewrapper模块创建图片处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用imagewrapper模块创建图片处理"}},[t._v("#")]),t._v(" 使用ImageWrapper模块创建图片处理")]),t._v(" "),s("div",{staticClass:"language-C line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//FImageWrapperModule")]),t._v("\nvirtual TSharedPtr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IImageWrapper"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateImageWrapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" EImageFormat InFormat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"处理图片的二进制数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#处理图片的二进制数据"}},[t._v("#")]),t._v(" 处理图片的二进制数据")]),t._v(" "),s("div",{staticClass:"language-C line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//FIcoImageWrapper")]),t._v("\nvirtual bool "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetCompressed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" InCompressedData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" int64 InCompressedSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"获取颜色数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取颜色数据"}},[t._v("#")]),t._v(" 获取颜色数据")]),t._v(" "),s("div",{staticClass:"language-C line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//FIcoImageWrapper")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//格式通常选择BGRA")]),t._v("\nvirtual bool "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetRaw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ERGBFormat InFormat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" int32 InBitDepth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TArray64"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("uint8"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" OutRawData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"创建空白texture"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建空白texture"}},[t._v("#")]),t._v(" 创建空白Texture")]),t._v(" "),s("div",{staticClass:"language-C line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//UTexture2D")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** creates and initializes a new Texture2D with the requested settings */")]),t._v("\n    ENGINE_API "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" class UTexture2D"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateTransient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("int32 InSizeX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" int32 InSizeY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" EPixelFormat InFormat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PF_B8G8R8A8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" FName InName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NAME_None"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"内存复制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存复制"}},[t._v("#")]),t._v(" 内存复制")]),t._v(" "),s("div",{staticClass:"language-C line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//FMemory")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" FORCEINLINE "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Memcpy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Dest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Src"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SIZE_T Count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("memcpy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" Dest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Src"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Count "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("blockquote",[s("p",[t._v("需要在.Build.cs中添加ImageWrapper模块")])]),t._v(" "),s("div",{staticClass:"language-C line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("\nbool UTexturesOperation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("LoadImageFromUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" FString"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" ImageUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" UTexture2D"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" InTexture"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    TArray"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("uint8"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ImageResultData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    FFileHelper"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("LoadFileToArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ImageResultData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ImageUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    IImageWrapperModule"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" ImageWrapperModule "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FModuleManager"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("LoadModuleChecked"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IImageWrapperModule"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ImageWrapper"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    TSharedPtr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IImageWrapper"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ImageWrapperPtr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ImageWrapperModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateImageWrapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetImageFormatFromExtension")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ImageUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ImageWrapperPtr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsValid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" ImageWrapperPtr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetCompressed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ImageResultData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ImageResultData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Num")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        TArray"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("uint8"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" OutRawData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//8位图片")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ImageWrapperPtr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetRaw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ERGBFormat"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("BGRA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" OutRawData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            InTexture "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UTexture2D"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateTransient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ImageWrapperPtr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetWidth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ImageWrapperPtr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetHeight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("InTexture"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" TextureData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" InTexture"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("PlatformData"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("Mips"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BulkData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Lock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOCK_READ_WRITE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                FMemory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Memcpy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TextureData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" OutRawData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" OutRawData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Num")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                InTexture"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("PlatformData"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("Mips"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BulkData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Unlock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                InTexture"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UpdateResource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);