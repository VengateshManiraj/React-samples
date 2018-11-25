export const TreeViewSampleOrder:Object = [
    { 'path': 'treeview/default', 'component':'Default', 'name': 'Default Functionalities', 'order': '01', 'category': 'TreeView', 'description': 'This demo demonstrates the basic tree view component that display the data in a hierarchical structure with the configuration options.', 'api':'{"TreeViewComponent":["fields"] }' },
    { 'path': 'treeview/icons', 'component':'Icons', 'name': 'Icons and Images', 'order': '01', 'category': 'TreeView', 'description': 'The tree view nodes can be rendered with any custom icons. This sample demonstrated like a file system with custom icons and images.', 'api':'{"TreeViewComponent":["fields","sortOrder"] }' },
    { 'path': 'treeview/check-box', 'component':'Checkbox', 'name': 'Checkbox', 'order': '01', 'category': 'TreeView',  'description': 'This demo demonstrates the tree view with checkbox functionality, this allows the user to check more than one tree nodes.', 'api':'{"TreeViewComponent":["fields","showCheckBox"] }' },    
    { 'path': 'treeview/node-editing', 'component':'Editing', 'name': 'Node Editing', 'order': '01', 'category': 'TreeView',  'description': 'This demo showcases the node editing functionality of tree view, you can edit any node text by double click on it or pressing F2.', 'api':'{"TreeViewComponent":["fields","allowEditing"] }' },
    { 'path': 'treeview/multiple-selection', 'component':'MultiSelect', 'name': 'Multiple Selection', 'order': '01', 'category': 'TreeView', 'hideOnDevice': true, 'description': 'The TreeView component allows to select multiple nodes by pressing CTRL key, also can select the range of nodes by pressing SHIFT key.', 'api':'{"TreeViewComponent":["fields","allowMultiSelection"] }' },
    { 'path': 'treeview/drag-and-drop', 'component':'Dragdrop', 'name': 'Drag and Drop', 'order': '01', 'category': 'TreeView', 'hideOnDevice': true, 'description': 'The tree view nodes can be drag and drop from one position to another, also the drop can be done to another tree view or other external container.', 'api':'{"TreeViewComponent":["fields","allowDragAndDrop","allowMultiSelection","nodeDragStop"] }' },
    { 'path': 'treeview/template', 'component':'Template', 'name': 'Template', 'order': '01', 'category': 'TreeView', 'description': 'The tree view node can be customized through the template option. In this demo the tree view nodes are templated like an mail system.', 'api':'{"TreeViewComponent":["fields","cssClass","nodeTemplate"] }' },
    { 'path': 'treeview/right-to-left', 'component':'RTL', 'name': 'RTL', 'order': '01', 'category': 'TreeView',  'description': 'This sample demonstrates the right to left direction (RTL) direction of the tree view node.', 'api':'{"TreeViewComponent":["fields","enableRtl"] }' },
    { 'path': 'treeview/local-data', 'component':'LocalData', 'name': 'Local Data', 'order': '02', 'category': 'Data Binding', 'description': 'This demo demonstrates the binding of local data to the tree view. The local data structure can be hierarchical data or list data.', 'api':'{"TreeViewComponent":["fields"] }'},
    { 'path': 'treeview/remote-data', 'component':'RemoteData', 'name': 'Remote Data', 'order': '02', 'category': 'Data Binding', 'description': 'This demo demonstrates the binding of data to the tree view from remote data source.', 'api':'{"TreeViewComponent":["fields","created","dataBound"] }'}
]
