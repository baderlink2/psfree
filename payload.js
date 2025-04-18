function load_exploit_done(){
  showMessage("Loading GoldHen..Please Wait"),
  setTimeout(load_goldhen, 500);
}

function load_goldhen(){
  PLfile = "goldhen.bin";
  toogle_payload();
}

function awaitpl(){
  showMessage("GoldHen Loaded Sucssefuly !...");
  EndTimer();
}