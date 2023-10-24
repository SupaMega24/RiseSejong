
//Set pop up for syllabi//

function openPopup(pdfPath) {
  const width = window.innerWidth * 0.8; // 80% of the inner width
  const height = window.innerHeight * 0.8; // 80% of the inner height
  const left = (window.innerWidth - width) / 2 + window.screenX;
  const top = (window.innerHeight - height) / 2 + window.screenY;

  window.open(pdfPath, '_blank', `width=${width},height=${height},left=${left},top=${top}`); // Adjust width and height as needed
}





  