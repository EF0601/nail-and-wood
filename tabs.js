function openTab(item) {
  switch (item) {
    case 1:
      document.querySelector('.tabContent1').style.display = "block";
      document.querySelector('.tabContent2').style.display = "none";
      document.querySelector('.tabContent4').style.display = "none";
      document.querySelector('.tabContent3').style.display = "none";
      break;
    case 2:
      document.querySelector('.tabContent2').style.display = "block";
      document.querySelector('.tabContent1').style.display = "none";
      document.querySelector('.tabContent4').style.display = "none";
      document.querySelector('.tabContent3').style.display = "none";
      break;
    case 3:
      document.querySelector('.tabContent3').style.display = "block";
      document.querySelector('.tabContent2').style.display = "none";
      document.querySelector('.tabContent1').style.display = "none";
      document.querySelector('.tabContent4').style.display = "none";
      break;
    case 4:
      document.querySelector('.tabContent4').style.display = "block";
      document.querySelector('.tabContent2').style.display = "none";
      document.querySelector('.tabContent1').style.display = "none";
      document.querySelector('.tabContent3').style.display = "none";
      break;
    default:
      console.log('error');
      break;
  }
}
openTab(1);
