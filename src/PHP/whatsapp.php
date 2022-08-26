  <?php
// Fix Api Whatsapp on Desktops
$iphone = strpos($_SERVER['HTTP_USER_AGENT'],"iPhone");
$android = strpos($_SERVER['HTTP_USER_AGENT'],"Android");
$palmpre = strpos($_SERVER['HTTP_USER_AGENT'],"webOS");
$berry = strpos($_SERVER['HTTP_USER_AGENT'],"BlackBerry");
$ipod = strpos($_SERVER['HTTP_USER_AGENT'],"iPod");
// check if is a mobile
if ($iphone || $android || $palmpre || $ipod || $berry == true)
{
  header('Location: https://api.whatsapp.com/send?phone=5522988026237&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20cota%C3%A7%C3%A3o!');
  //OR
  echo "<script>window.location='https://api.whatsapp.com/send?phone=5522988026237&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20cota%C3%A7%C3%A3o!'</script>";
}
// all others
else {
  header('Location: https://api.whatsapp.com/send?phone=5522988026237&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20cota%C3%A7%C3%A3o!');
  //OR
  echo "<script>window.location='https://api.whatsapp.com/send?phone=5522988026237&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20cota%C3%A7%C3%A3o!'</script>";
}
?>