{
  "targets": [
    {
      "target_name": "shifctp",
      "sources": [ "src/shifctp.cc","src/tools.cc","src/stdafx.cpp","src/uv_mduser.cpp","src/uv_trader.cpp","src/wrap_mduser.cpp","src/wrap_trader.cpp" ],
      "libraries":["libs/tradeapi64_windows/thostmduserapi.lib","libs/tradeapi64_windows/thosttraderapi.lib"],
      "include_dirs":["include/ctp/"]
    }
  ],
}


