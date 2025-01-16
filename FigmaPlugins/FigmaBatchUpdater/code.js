async function updateTextStyles() {
    const newStyle = figma.getStyleById('NEW_STYLE_ID');
    const oldStyle = figma.getStyleById('OLD_STYLE_ID');
  
    const nodesToUpdate = [];
  
    // Loop through all pages and layers
    figma.root.children.forEach(page => {
      page.children.forEach(node => {
        if (node.type === 'TEXT' && node.textStyleId === oldStyle.id) {
          nodesToUpdate.push(node);
        }
      });
    });
  
    nodesToUpdate.forEach(node => {
      node.textStyleId = newStyle.id;
    });
  
    figma.closePlugin('Text styles updated successfully!');
  }
  
  figma.ui.onmessage = (msg) => {
    if (msg.type === 'update-styles') {
      updateTextStyles();
    }
  };
  
  figma.ui.show({
    width: 240,
    height: 120
  });
  