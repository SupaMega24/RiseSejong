
document.getElementById("open-pdf").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    
    // Open a new popup window with specific dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    
    window.open('https://docs.google.com/document/d/1R6sd95XCCrCIdjX3pqOPQGKnLDbJBLd3vfhDN0SNrYA/edit', "PDFPopup", "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top);
  });
  