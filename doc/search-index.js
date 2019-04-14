var N=null,E="",T="t",U="u",searchIndex={};
var R=["gnuplot","If the axes are drawn on the border, this specifies…","coordinate","intoiterator","Plot a 2D scatter-plot with a point standing in for each…","option","points","lines_points","A combination of lines and points methods (drawn in that…","set_x_axis","Sets the properties of x axis.","set_y_axis","Like `set_x_axis` but for the y axis.","autooption","contourstyle","gnuplotversion","figure","Like `set_x_ticks_custom` but for the the Y axis.","try_from","borrow_mut","try_into","result","type_id","to_owned","clone_into","borrow","typeid","ordering","palettetype","formatter","set_pos_grid","Set the position of the axes on the figure using grid…","Set the position of the axes on the figure using screen…","set_size","Set the size of the axes # Arguments * `w` - Width. Ranges…","set_aspect_ratio","Set the aspect ratio of the axes # Arguments * `ratio` -…","set_x_label","Set the label for the X axis # Arguments * `text` - Text…","set_y_label","Like `set_x_label`, but for the Y axis","set_cb_label","Like `set_x_label`, but for the color bar","set_title","Set the title for the axes # Arguments * `text` - Text of…","Adds a label to the plot, with an optional marker. #…","set_x_ticks","Sets the properties of the ticks on the X axis.","set_y_ticks","Like `set_x_ticks` but for the Y axis.","set_cb_ticks","Like `set_x_ticks` but for the color bar axis.","set_x_ticks_custom","Sets ticks on the X axis with specified labels at…","set_y_ticks_custom","set_cb_ticks_custom","Like `set_x_ticks_custom` but for the the color bar axis.","set_x_range","Set the range of values for the X axis.","set_y_range","Set the range of values for the Y axis.","set_x_reverse","Sets X axis to reverse. # Arguments * `reverse` - Boolean,…","set_y_reverse","Sets Y axis to reverse. # Arguments * `reverse` - Boolean,…","set_cb_range","Set the range of values for the color bar axis.","set_x_log","Sets the X axis be logarithmic. Note that the range must…","set_y_log","Sets the Y axis be logarithmic. Note that the range must…","set_cb_log","Sets the color bar axis be logarithmic. Note that the…","set_x_grid","Shows the grid on the X axis.","set_x_minor_grid","Shows the minor grid on the X axis.","set_y_grid","Shows the grid on the Y axis.","set_y_minor_grid","Shows the minor grid on the Y axis.","set_cb_grid","Shows the grid on the color bar axis.","set_grid_options","Set the grid options.","set_minor_grid_options","Set the minor grid options.","set_x_time","Sets the X axis be time.","set_y_time","Sets the Y axis be time. Note that the range must be…","set_cb_time","Sets the color bar axis be time. Note that the range must…","set_margins","Sets the margins of the plot.","set_palette","Sets the palette used for 3D surface and image plots","set_custom_palette","Sets a custom palette used for 3D surface and image plots.…","GnuplotVersion","Coordinate","PlotOption","FillRegionType","AlignType","ArrowheadType","AutoOption","LabelOption","TickOption","BorderLocation2D","MarginSide","LegendOption","ContourStyle","PaletteType","AxesCommon"];

searchIndex[R[0]]={"doc":"A simple gnuplot controller.","i":[[3,"Axes2D",R[0],"2D axes that is used for drawing 2D plots",N,N],[3,"Axes3D",E,"3D axes that is used for drawing 3D plots",N,N],[3,"Figure",E,"A figure that may contain multiple axes",N,N],[3,R[99],E,"Gnuplot version identifier. This is used to handle…",N,N],[12,"major",E,E,0,N],[12,"minor",E,E,0,N],[4,R[100],E,"Specifies how to interpret the coordinate passed to a…",N,N],[13,"Graph",E,"Coordinates are done relative to a graph (i.e. an axis…",1,N],[13,"Axis",E,"Coordinates match those on the axes. You'd use this to…",1,N],[4,R[101],E,"An enumeration of plot options you can supply to plotting…",N,N],[13,"PointSymbol",E,"Sets the symbol used for points. The valid characters are…",2,N],[13,"PointSize",E,"Sets the size of the points. The size acts as a…",2,N],[13,"Caption",E,"Sets the caption of the plot element. Set to empty to hide…",2,N],[13,"LineWidth",E,"Sets the width of lines.",2,N],[13,"Color",E,"Sets the color of the plot element. The passed string can…",2,N],[13,"BorderColor",E,"Sets the color of the border of a filled plot (if it has…",2,N],[13,"LineStyle",E,"Sets the style of the line. Note that not all gnuplot…",2,N],[13,"FillAlpha",E,"Sets the transparency of a filled plot. `0.0` - fully…",2,N],[13,"FillRegion",E,"Sets the fill region. See FillRegion for the available…",2,N],[13,"ArrowType",E,"Sets what an arrowhead looks like",2,N],[13,"ArrowSize",E,"Sets the size of the arrowhead. This is specified in the…",2,N],[13,"WhiskerBars",E,"Width of the whisker bars (as a fraction of the box width)…",2,N],[4,R[102],E,"An enumeration of possible fill regions",N,N],[13,"Above",E,E,3,N],[13,"Below",E,E,3,N],[13,"Between",E,E,3,N],[4,R[103],E,"An enumeration of possible text and label alignments",N,N],[13,"AlignLeft",E,E,4,N],[13,"AlignRight",E,E,4,N],[13,"AlignCenter",E,E,4,N],[13,"AlignTop",E,E,4,N],[13,"AlignBottom",E,E,4,N],[4,"DashType",E,"An enumeration of possible dash styles",N,N],[13,"Solid",E,E,5,N],[13,"SmallDot",E,E,5,N],[13,"Dot",E,E,5,N],[13,"Dash",E,E,5,N],[13,"DotDash",E,E,5,N],[13,"DotDotDash",E,E,5,N],[4,R[104],E,"An enumeration of possible arrow head styles",N,N],[13,"Open",E,"An arrow head shaped like a 'V'",6,N],[13,"Closed",E,"An arrow head shaped like an outlined triangle",6,N],[13,"Filled",E,"An arrow head shaped like a filled triangle",6,N],[13,"NoArrow",E,"No arrow head",6,N],[4,R[105],E,"An enumeration of something that can either be fixed (e.g.…",N,N],[13,"Fix",E,"Fixes the value to a specific value",7,N],[13,"Auto",E,"Lets the value scale automatically",7,N],[4,R[106],E,"An enumeration of label options that control label…",N,N],[13,"TextOffset",E,"Sets the offset of the label in characters",8,N],[13,"Font",E,"Sets the font of the label. The string specifies the font…",8,N],[13,"TextColor",E,"Sets the color of the label text. The passed string can be…",8,N],[13,"Rotate",E,"Rotates the label by a certain number of degrees",8,N],[13,"TextAlign",E,"Sets the horizontal alignment of the label text (default…",8,N],[13,"MarkerSymbol",E,"Sets a marker for the label. By default no marker is…",8,N],[13,"MarkerColor",E,"Sets the color of the marker. The passed string can be a…",8,N],[13,"MarkerSize",E,"Sets the size of the marker. The size acts as a…",8,N],[4,R[107],E,"An enumeration of axis tick options",N,N],[13,"OnAxis",E,"Specifies whether the ticks are drawn at the borders of…",9,N],[13,"Mirror",E,R[1],9,N],[13,"Inward",E,R[1],9,N],[13,"MinorScale",E,"Sets the scale of the minor ticks",9,N],[13,"MajorScale",E,"Sets the scale of the major ticks",9,N],[13,"Format",E,"Format of the tick labels, e.g. \"%.1f ms\" will produces…",9,N],[4,"Tick",E,"Specifies a type of axis tick",N,N],[13,"Major",E,"Major ticks have position and an optional label. The label…",10,N],[13,"Minor",E,"Minor ticks only have position",10,N],[4,R[108],E,"Plot border locations",N,N],[13,"Bottom",E,E,11,N],[13,"Left",E,E,11,N],[13,"Top",E,E,11,N],[13,"Right",E,E,11,N],[4,R[109],E,"Plot margins",N,N],[13,"MarginTop",E,E,12,N],[13,"MarginBottom",E,E,12,N],[13,"MarginLeft",E,E,12,N],[13,"MarginRight",E,E,12,N],[4,R[110],E,"Legend options",N,N],[13,"Reverse",E,"Puts curve samples to the left of the label",13,N],[13,"Invert",E,"Displays legend entries in opposite order",13,N],[13,"Horizontal",E,"Makes the legend horizontal (default is vertical)",13,N],[13,"Placement",E,"Specifies the location of the legend. The first argument…",13,N],[13,"Title",E,"Title of the legend",13,N],[13,"MaxRows",E,"Specifies the maximum number of rows, when the legend is…",13,N],[13,"MaxCols",E,"Specifies the maximum number of columns, when the legend…",13,N],[4,R[111],E,"Specifies how the contours are drawn",N,N],[13,"Linear",E,"Draw lines between points of equal value",14,N],[13,"Cubic",E,"Draw somewhat smoother curves between points with equal…",14,N],[13,"Spline",E,"Draw an even smoother curve, this time approximating the…",14,N],[4,R[112],E,"Specifies what sort of palette to use",N,N],[13,"Gray",E,"Use a gray palette with a specified gamma",15,N],[13,"Formula",E,"Use a palette with that uses a predefined formula for each…",15,N],[13,"CubeHelix",E,"Use a cube helix palette, with a certain start (in…",15,N],[11,"set_border",E,"Sets the properties of the plot border",16,[[["self"],["bool"]],["self"]]],[11,R[9],E,R[10],16,[[["self"],["bool"]],["self"]]],[11,R[11],E,R[12],16,[[["self"],["bool"]],["self"]]],[11,"arrow",E,"Adds an arrow to the plot. The arrow is drawn from `(x1,…",16,[[["self"],[R[2]]],["self"]]],[11,"set_legend",E,"Specifies the location and other properties of the legend…",16,[[["self"],[R[2]]],["self"]]],[11,"lines",E,"Plot a 2D scatter-plot with lines connecting each data…",16,[[[R[3]],["self"],[R[3]]],["self"]]],[11,R[6],E,R[4],16,[[[R[3]],["self"],[R[3]]],["self"]]],[11,R[7],E,R[8],16,[[[R[3]],["self"],[R[3]]],["self"]]],[11,"x_error_bars",E,R[4],16,[[[R[3]],[R[3]],["self"],[R[3]]],["self"]]],[11,"y_error_bars",E,R[4],16,[[[R[3]],[R[3]],["self"],[R[3]]],["self"]]],[11,"x_error_lines",E,R[4],16,[[[R[3]],[R[3]],["self"],[R[3]]],["self"]]],[11,"y_error_lines",E,R[4],16,[[[R[3]],[R[3]],["self"],[R[3]]],["self"]]],[11,"fill_between",E,"Plot a 2D scatter-plot of two curves (bound by `y_lo` and…",16,[[[R[3]],[R[3]],["self"],[R[3]]],["self"]]],[11,"boxes",E,"Plot a 2D scatter-plot using boxes of automatic width. Box…",16,[[[R[3]],["self"],[R[3]]],["self"]]],[11,"boxes_set_width",E,"Plot a 2D scatter-plot using boxes of set (per box) width.…",16,[[[R[3]],[R[3]],["self"],[R[3]]],["self"]]],[11,"box_and_whisker",E,"Plot a 2D box-and-whisker plot using boxes of automatic…",16,[[[R[3]],[R[3]],[R[3]],["self"],[R[3]],[R[3]]],["self"]]],[11,"box_and_whisker_set_width",E,"Plot a 2D box-and-whisker plot using boxes of set width.",16,[[[R[3]],[R[3]],[R[3]],["self"],[R[3]],[R[3]],[R[3]]],["self"]]],[11,"image",E,"Draws an image from a rectangular array of data by…",16,[[[R[5]],["self"],["usize"],[R[3]]],["self"]]],[11,"surface",E,"Draws a 3D surface from a rectangular array of data by…",17,[[[R[5]],["self"],["usize"],[R[3]]],["self"]]],[11,R[6],E,"Plot a 3D scatter-plot with a point standing in for each…",17,[[[R[3]],["self"],[R[3]],[R[3]]],["self"]]],[11,"lines",E,"Plot a 3D scatter-plot with lines connecting each data…",17,[[[R[3]],["self"],[R[3]],[R[3]]],["self"]]],[11,R[7],E,R[8],17,[[[R[3]],["self"],[R[3]],[R[3]]],["self"]]],[11,"set_view",E,"Sets the 3D view.",17,[[["f64"],["self"]],["self"]]],[11,"set_view_map",E,"Sets the view to be a map. Useful for images and contour…",17,[[["self"]],["self"]]],[11,"set_z_label",E,"Set the label for the Z axis",17,[[["str"],["self"]],["self"]]],[11,R[9],E,R[10],17,[[["self"],["bool"]],["self"]]],[11,R[11],E,R[12],17,[[["self"],["bool"]],["self"]]],[11,"set_z_axis",E,"Like `set_x_axis` but for the z axis.",17,[[["self"],["bool"]],["self"]]],[11,"set_z_ticks",E,"Like `set_x_ticks` but for the Z axis.",17,[[[R[5]],["self"]],["self"]]],[11,"set_z_ticks_custom",E,R[17],17,[[[R[3]],["self"]],["self"]]],[11,"set_z_range",E,"Set the range of values for the Z axis",17,[[["f64"],[R[13],["f64"]],["self"]],["self"]]],[11,"set_z_reverse",E,"Sets z axis to reverse.",17,[[["self"],["bool"]],["self"]]],[11,"set_z_log",E,"Sets the Z axis be logarithmic. Note that the range must…",17,[[[R[5],["f64"]],["f64"],["self"]],["self"]]],[11,"set_z_grid",E,"Shows the grid on the Z axis.",17,[[["self"],["bool"]],["self"]]],[11,"set_z_time",E,"Sets the Z axis be time. Note that the range must be…",17,[[["self"],["bool"]],["self"]]],[11,"show_contours",E,"Show contours (lines of equal Z value) at automatically…",17,[[["u32"],["str"],[R[13],["str"]],[R[13],["u32"]],[R[14]],["self"],["bool"]],["self"]]],[11,"show_contours_custom",E,"Show contours (lines of equal Z value) at specific levels.",17,[[["str"],[R[13],["str"]],[R[14]],["self"],["bool"],[R[3]]],["self"]]],[11,"new",E,"Creates a new figure",18,[[],[R[16]]]],[11,"set_terminal",E,"Sets the terminal for gnuplot to use, as well as the file…",18,[[["str"],["self"]],[R[16]]]],[11,"set_post_commands",E,"Sets commands to send to gnuplot after all the plotting…",18,[[["str"],["self"]],[R[16]]]],[11,"set_pre_commands",E,"Sets commands to send to gnuplot before any plotting…",18,[[["str"],["self"]],[R[16]]]],[11,"set_gnuplot_version",E,"Sets the Gnuplot version.",18,[[[R[5],[R[15]]],["self"],[R[15]]],[R[16]]]],[11,"get_gnuplot_version",E,"Returns the Gnuplot version.",18,[[["self"]],[R[15]]]],[11,"axes2d",E,"Creates a set of 2D axes",18,[[["self"]],["axes2d"]]],[11,"axes3d",E,"Creates a set of 3D axes",18,[[["self"]],["axes3d"]]],[11,"new_page",E,"Creates a new page.",18,[[["self"]],[R[16]]]],[11,"show",E,"Launch a gnuplot process, if it hasn't been spawned…",18,[[["self"]],[R[16]]]],[11,"close",E,"Closes the gnuplot process.",18,[[["self"]],[R[16]]]],[11,"clear_axes",E,"Clears all axes on this figure.",18,[[["self"]],[R[16]]]],[11,"echo",E,"Echo the commands that if piped to a gnuplot process would…",18,[[[T],["self"]],[R[16]]]],[11,"echo_to_file",E,"Save to a file the the commands that if piped to a gnuplot…",18,[[["str"],["self"]],[R[16]]]],[11,"to_int",E,E,5,[[["self"]],["i32"]]],[11,"map",E,"Same as `Option::map`",7,[[["fnonce"]],[R[13]]]],[17,"GRAY",E,"A gray palette",N,N],[17,"COLOR",E,"Default Gnuplot palette",N,N],[17,"RAINBOW",E,"Classic rainbow palette with terrible perceptual properties",N,N],[17,"HOT",E,"A black body palette",N,N],[17,"HELIX",E,"A nice default for a cube helix",N,N],[8,R[113],E,E,N,N],[11,R[30],E,R[31],19,[[["u32"],["self"]],["self"]]],[11,"set_pos",E,R[32],19,[[["f64"],["self"]],["self"]]],[11,R[33],E,R[34],19,[[["f64"],["self"]],["self"]]],[11,R[35],E,R[36],19,[[["f64"],[R[13],["f64"]],["self"]],["self"]]],[11,R[37],E,R[38],19,[[["str"],["self"]],["self"]]],[11,R[39],E,R[40],19,[[["str"],["self"]],["self"]]],[11,R[41],E,R[42],19,[[["str"],["self"]],["self"]]],[11,R[43],E,R[44],19,[[["str"],["self"]],["self"]]],[11,"label",E,R[45],19,[[["str"],["self"],[R[2]]],["self"]]],[11,R[46],E,R[47],19,[[[R[5]],["self"]],["self"]]],[11,R[48],E,R[49],19,[[[R[5]],["self"]],["self"]]],[11,R[50],E,R[51],19,[[[R[5]],["self"]],["self"]]],[11,R[52],E,R[53],19,[[[R[3]],["self"]],["self"]]],[11,R[54],E,R[17],19,[[[R[3]],["self"]],["self"]]],[11,R[55],E,R[56],19,[[[R[3]],["self"]],["self"]]],[11,R[57],E,R[58],19,[[["f64"],[R[13],["f64"]],["self"]],["self"]]],[11,R[59],E,R[60],19,[[["f64"],[R[13],["f64"]],["self"]],["self"]]],[11,R[61],E,R[62],19,[[["self"],["bool"]],["self"]]],[11,R[63],E,R[64],19,[[["self"],["bool"]],["self"]]],[11,R[65],E,R[66],19,[[["f64"],[R[13],["f64"]],["self"]],["self"]]],[11,R[67],E,R[68],19,[[[R[5],["f64"]],["f64"],["self"]],["self"]]],[11,R[69],E,R[70],19,[[[R[5],["f64"]],["f64"],["self"]],["self"]]],[11,R[71],E,R[72],19,[[[R[5],["f64"]],["f64"],["self"]],["self"]]],[11,R[73],E,R[74],19,[[["self"],["bool"]],["self"]]],[11,R[75],E,R[76],19,[[["self"],["bool"]],["self"]]],[11,R[77],E,R[78],19,[[["self"],["bool"]],["self"]]],[11,R[79],E,R[80],19,[[["self"],["bool"]],["self"]]],[11,R[81],E,R[82],19,[[["self"],["bool"]],["self"]]],[11,R[83],E,R[84],19,[[["self"],["bool"]],["self"]]],[11,R[85],E,R[86],19,[[["self"]],["self"]]],[11,R[87],E,R[88],19,[[["self"],["bool"]],["self"]]],[11,R[89],E,R[90],19,[[["self"],["bool"]],["self"]]],[11,R[91],E,R[92],19,[[["self"],["bool"]],["self"]]],[11,R[93],E,R[94],19,[[["self"]],["self"]]],[11,R[95],E,R[96],19,[[["self"],[R[28]]],["self"]]],[11,R[97],E,R[98],19,[[["self"],[R[3]]],["self"]]],[8,"DataType",E,E,N,N],[10,"get",E,E,20,[[["self"]],["f64"]]],[11,"from",E,E,16,[[[T]],[T]]],[11,"into",E,E,16,[[],[U]]],[11,R[18],E,E,16,[[[U]],[R[21]]]],[11,R[25],E,E,16,[[["self"]],[T]]],[11,R[22],E,E,16,[[["self"]],[R[26]]]],[11,R[19],E,E,16,[[["self"]],[T]]],[11,R[20],E,E,16,[[],[R[21]]]],[11,"from",E,E,17,[[[T]],[T]]],[11,"into",E,E,17,[[],[U]]],[11,R[18],E,E,17,[[[U]],[R[21]]]],[11,R[25],E,E,17,[[["self"]],[T]]],[11,R[22],E,E,17,[[["self"]],[R[26]]]],[11,R[19],E,E,17,[[["self"]],[T]]],[11,R[20],E,E,17,[[],[R[21]]]],[11,"from",E,E,18,[[[T]],[T]]],[11,"into",E,E,18,[[],[U]]],[11,R[18],E,E,18,[[[U]],[R[21]]]],[11,R[25],E,E,18,[[["self"]],[T]]],[11,R[22],E,E,18,[[["self"]],[R[26]]]],[11,R[19],E,E,18,[[["self"]],[T]]],[11,R[20],E,E,18,[[],[R[21]]]],[11,R[23],E,E,0,[[["self"]],[T]]],[11,R[24],E,E,0,[[[T],["self"]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[],[U]]],[11,R[18],E,E,0,[[[U]],[R[21]]]],[11,R[25],E,E,0,[[["self"]],[T]]],[11,R[22],E,E,0,[[["self"]],[R[26]]]],[11,R[19],E,E,0,[[["self"]],[T]]],[11,R[20],E,E,0,[[],[R[21]]]],[11,R[23],E,E,1,[[["self"]],[T]]],[11,R[24],E,E,1,[[[T],["self"]]]],[11,"to_string",E,E,1,[[["self"]],["string"]]],[11,"from",E,E,1,[[[T]],[T]]],[11,"into",E,E,1,[[],[U]]],[11,R[18],E,E,1,[[[U]],[R[21]]]],[11,R[25],E,E,1,[[["self"]],[T]]],[11,R[22],E,E,1,[[["self"]],[R[26]]]],[11,R[19],E,E,1,[[["self"]],[T]]],[11,R[20],E,E,1,[[],[R[21]]]],[11,R[23],E,E,2,[[["self"]],[T]]],[11,R[24],E,E,2,[[[T],["self"]]]],[11,"from",E,E,2,[[[T]],[T]]],[11,"into",E,E,2,[[],[U]]],[11,R[18],E,E,2,[[[U]],[R[21]]]],[11,R[25],E,E,2,[[["self"]],[T]]],[11,R[22],E,E,2,[[["self"]],[R[26]]]],[11,R[19],E,E,2,[[["self"]],[T]]],[11,R[20],E,E,2,[[],[R[21]]]],[11,R[23],E,E,3,[[["self"]],[T]]],[11,R[24],E,E,3,[[[T],["self"]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,"into",E,E,3,[[],[U]]],[11,R[18],E,E,3,[[[U]],[R[21]]]],[11,R[25],E,E,3,[[["self"]],[T]]],[11,R[22],E,E,3,[[["self"]],[R[26]]]],[11,R[19],E,E,3,[[["self"]],[T]]],[11,R[20],E,E,3,[[],[R[21]]]],[11,R[23],E,E,4,[[["self"]],[T]]],[11,R[24],E,E,4,[[[T],["self"]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,"into",E,E,4,[[],[U]]],[11,R[18],E,E,4,[[[U]],[R[21]]]],[11,R[25],E,E,4,[[["self"]],[T]]],[11,R[22],E,E,4,[[["self"]],[R[26]]]],[11,R[19],E,E,4,[[["self"]],[T]]],[11,R[20],E,E,4,[[],[R[21]]]],[11,R[23],E,E,5,[[["self"]],[T]]],[11,R[24],E,E,5,[[[T],["self"]]]],[11,"from",E,E,5,[[[T]],[T]]],[11,"into",E,E,5,[[],[U]]],[11,R[18],E,E,5,[[[U]],[R[21]]]],[11,R[25],E,E,5,[[["self"]],[T]]],[11,R[22],E,E,5,[[["self"]],[R[26]]]],[11,R[19],E,E,5,[[["self"]],[T]]],[11,R[20],E,E,5,[[],[R[21]]]],[11,R[23],E,E,6,[[["self"]],[T]]],[11,R[24],E,E,6,[[[T],["self"]]]],[11,"from",E,E,6,[[[T]],[T]]],[11,"into",E,E,6,[[],[U]]],[11,R[18],E,E,6,[[[U]],[R[21]]]],[11,R[25],E,E,6,[[["self"]],[T]]],[11,R[22],E,E,6,[[["self"]],[R[26]]]],[11,R[19],E,E,6,[[["self"]],[T]]],[11,R[20],E,E,6,[[],[R[21]]]],[11,R[23],E,E,7,[[["self"]],[T]]],[11,R[24],E,E,7,[[[T],["self"]]]],[11,"from",E,E,7,[[[T]],[T]]],[11,"into",E,E,7,[[],[U]]],[11,R[18],E,E,7,[[[U]],[R[21]]]],[11,R[25],E,E,7,[[["self"]],[T]]],[11,R[22],E,E,7,[[["self"]],[R[26]]]],[11,R[19],E,E,7,[[["self"]],[T]]],[11,R[20],E,E,7,[[],[R[21]]]],[11,R[23],E,E,8,[[["self"]],[T]]],[11,R[24],E,E,8,[[[T],["self"]]]],[11,"from",E,E,8,[[[T]],[T]]],[11,"into",E,E,8,[[],[U]]],[11,R[18],E,E,8,[[[U]],[R[21]]]],[11,R[25],E,E,8,[[["self"]],[T]]],[11,R[22],E,E,8,[[["self"]],[R[26]]]],[11,R[19],E,E,8,[[["self"]],[T]]],[11,R[20],E,E,8,[[],[R[21]]]],[11,R[23],E,E,9,[[["self"]],[T]]],[11,R[24],E,E,9,[[[T],["self"]]]],[11,"from",E,E,9,[[[T]],[T]]],[11,"into",E,E,9,[[],[U]]],[11,R[18],E,E,9,[[[U]],[R[21]]]],[11,R[25],E,E,9,[[["self"]],[T]]],[11,R[22],E,E,9,[[["self"]],[R[26]]]],[11,R[19],E,E,9,[[["self"]],[T]]],[11,R[20],E,E,9,[[],[R[21]]]],[11,R[23],E,E,10,[[["self"]],[T]]],[11,R[24],E,E,10,[[[T],["self"]]]],[11,"from",E,E,10,[[[T]],[T]]],[11,"into",E,E,10,[[],[U]]],[11,R[18],E,E,10,[[[U]],[R[21]]]],[11,R[25],E,E,10,[[["self"]],[T]]],[11,R[22],E,E,10,[[["self"]],[R[26]]]],[11,R[19],E,E,10,[[["self"]],[T]]],[11,R[20],E,E,10,[[],[R[21]]]],[11,R[23],E,E,11,[[["self"]],[T]]],[11,R[24],E,E,11,[[[T],["self"]]]],[11,"from",E,E,11,[[[T]],[T]]],[11,"into",E,E,11,[[],[U]]],[11,R[18],E,E,11,[[[U]],[R[21]]]],[11,R[25],E,E,11,[[["self"]],[T]]],[11,R[22],E,E,11,[[["self"]],[R[26]]]],[11,R[19],E,E,11,[[["self"]],[T]]],[11,R[20],E,E,11,[[],[R[21]]]],[11,R[23],E,E,12,[[["self"]],[T]]],[11,R[24],E,E,12,[[[T],["self"]]]],[11,"from",E,E,12,[[[T]],[T]]],[11,"into",E,E,12,[[],[U]]],[11,R[18],E,E,12,[[[U]],[R[21]]]],[11,R[25],E,E,12,[[["self"]],[T]]],[11,R[22],E,E,12,[[["self"]],[R[26]]]],[11,R[19],E,E,12,[[["self"]],[T]]],[11,R[20],E,E,12,[[],[R[21]]]],[11,R[23],E,E,13,[[["self"]],[T]]],[11,R[24],E,E,13,[[[T],["self"]]]],[11,"from",E,E,13,[[[T]],[T]]],[11,"into",E,E,13,[[],[U]]],[11,R[18],E,E,13,[[[U]],[R[21]]]],[11,R[25],E,E,13,[[["self"]],[T]]],[11,R[22],E,E,13,[[["self"]],[R[26]]]],[11,R[19],E,E,13,[[["self"]],[T]]],[11,R[20],E,E,13,[[],[R[21]]]],[11,R[23],E,E,14,[[["self"]],[T]]],[11,R[24],E,E,14,[[[T],["self"]]]],[11,"from",E,E,14,[[[T]],[T]]],[11,"into",E,E,14,[[],[U]]],[11,R[18],E,E,14,[[[U]],[R[21]]]],[11,R[25],E,E,14,[[["self"]],[T]]],[11,R[22],E,E,14,[[["self"]],[R[26]]]],[11,R[19],E,E,14,[[["self"]],[T]]],[11,R[20],E,E,14,[[],[R[21]]]],[11,R[23],E,E,15,[[["self"]],[T]]],[11,R[24],E,E,15,[[[T],["self"]]]],[11,"from",E,E,15,[[[T]],[T]]],[11,"into",E,E,15,[[],[U]]],[11,R[18],E,E,15,[[[U]],[R[21]]]],[11,R[25],E,E,15,[[["self"]],[T]]],[11,R[22],E,E,15,[[["self"]],[R[26]]]],[11,R[19],E,E,15,[[["self"]],[T]]],[11,R[20],E,E,15,[[],[R[21]]]],[11,"partial_cmp",E,E,0,[[["self"],[R[15]]],[[R[27]],[R[5],[R[27]]]]]],[11,"lt",E,E,0,[[["self"],[R[15]]],["bool"]]],[11,"le",E,E,0,[[["self"],[R[15]]],["bool"]]],[11,"gt",E,E,0,[[["self"],[R[15]]],["bool"]]],[11,"ge",E,E,0,[[["self"],[R[15]]],["bool"]]],[11,"eq",E,E,0,[[["self"],[R[15]]],["bool"]]],[11,"ne",E,E,0,[[["self"],[R[15]]],["bool"]]],[11,"clone",E,E,1,[[["self"]],[R[2]]]],[11,"clone",E,E,2,[[["self"]],["plotoption"]]],[11,"clone",E,E,3,[[["self"]],["fillregiontype"]]],[11,"clone",E,E,4,[[["self"]],["aligntype"]]],[11,"clone",E,E,5,[[["self"]],["dashtype"]]],[11,"clone",E,E,6,[[["self"]],["arrowheadtype"]]],[11,"clone",E,E,7,[[["self"]],[R[13]]]],[11,"clone",E,E,8,[[["self"]],["labeloption"]]],[11,"clone",E,E,9,[[["self"]],["tickoption"]]],[11,"clone",E,E,10,[[["self"]],["tick"]]],[11,"clone",E,E,11,[[["self"]],["borderlocation2d"]]],[11,"clone",E,E,12,[[["self"]],["marginside"]]],[11,"clone",E,E,13,[[["self"]],["legendoption"]]],[11,"clone",E,E,14,[[["self"]],[R[14]]]],[11,"clone",E,E,15,[[["self"]],[R[28]]]],[11,"clone",E,E,0,[[["self"]],[R[15]]]],[11,"default",E,E,0,[[],[R[15]]]],[11,"cmp",E,E,0,[[["self"],[R[15]]],[R[27]]]],[11,"fmt",E,E,1,[[["self"],[R[29]]],[R[21]]]],[11,"fmt",E,E,4,[[["self"],[R[29]]],[R[21]]]],[11,"fmt",E,E,5,[[["self"],[R[29]]],[R[21]]]],[11,"fmt",E,E,0,[[["self"],[R[29]]],[R[21]]]],[11,R[30],E,R[31],19,[[["u32"],["self"]],["self"]]],[11,"set_pos",E,R[32],19,[[["f64"],["self"]],["self"]]],[11,R[33],E,R[34],19,[[["f64"],["self"]],["self"]]],[11,R[35],E,R[36],19,[[["f64"],[R[13],["f64"]],["self"]],["self"]]],[11,R[37],E,R[38],19,[[["str"],["self"]],["self"]]],[11,R[39],E,R[40],19,[[["str"],["self"]],["self"]]],[11,R[41],E,R[42],19,[[["str"],["self"]],["self"]]],[11,R[43],E,R[44],19,[[["str"],["self"]],["self"]]],[11,"label",E,R[45],19,[[["str"],["self"],[R[2]]],["self"]]],[11,R[46],E,R[47],19,[[[R[5]],["self"]],["self"]]],[11,R[48],E,R[49],19,[[[R[5]],["self"]],["self"]]],[11,R[50],E,R[51],19,[[[R[5]],["self"]],["self"]]],[11,R[52],E,R[53],19,[[[R[3]],["self"]],["self"]]],[11,R[54],E,R[17],19,[[[R[3]],["self"]],["self"]]],[11,R[55],E,R[56],19,[[[R[3]],["self"]],["self"]]],[11,R[57],E,R[58],19,[[["f64"],[R[13],["f64"]],["self"]],["self"]]],[11,R[59],E,R[60],19,[[["f64"],[R[13],["f64"]],["self"]],["self"]]],[11,R[61],E,R[62],19,[[["self"],["bool"]],["self"]]],[11,R[63],E,R[64],19,[[["self"],["bool"]],["self"]]],[11,R[65],E,R[66],19,[[["f64"],[R[13],["f64"]],["self"]],["self"]]],[11,R[67],E,R[68],19,[[[R[5],["f64"]],["f64"],["self"]],["self"]]],[11,R[69],E,R[70],19,[[[R[5],["f64"]],["f64"],["self"]],["self"]]],[11,R[71],E,R[72],19,[[[R[5],["f64"]],["f64"],["self"]],["self"]]],[11,R[73],E,R[74],19,[[["self"],["bool"]],["self"]]],[11,R[75],E,R[76],19,[[["self"],["bool"]],["self"]]],[11,R[77],E,R[78],19,[[["self"],["bool"]],["self"]]],[11,R[79],E,R[80],19,[[["self"],["bool"]],["self"]]],[11,R[81],E,R[82],19,[[["self"],["bool"]],["self"]]],[11,R[83],E,R[84],19,[[["self"],["bool"]],["self"]]],[11,R[85],E,R[86],19,[[["self"]],["self"]]],[11,R[87],E,R[88],19,[[["self"],["bool"]],["self"]]],[11,R[89],E,R[90],19,[[["self"],["bool"]],["self"]]],[11,R[91],E,R[92],19,[[["self"],["bool"]],["self"]]],[11,R[93],E,R[94],19,[[["self"]],["self"]]],[11,R[95],E,R[96],19,[[["self"],[R[28]]],["self"]]],[11,R[97],E,R[98],19,[[["self"],[R[3]]],["self"]]]],"p":[[3,R[99]],[4,R[100]],[4,R[101]],[4,R[102]],[4,R[103]],[4,"DashType"],[4,R[104]],[4,R[105]],[4,R[106]],[4,R[107]],[4,"Tick"],[4,R[108]],[4,R[109]],[4,R[110]],[4,R[111]],[4,R[112]],[3,"Axes2D"],[3,"Axes3D"],[3,"Figure"],[8,R[113]],[8,"DataType"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);