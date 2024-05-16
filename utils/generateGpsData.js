const generateSimNumber = require("./generateSimNumber");
const convert = require("./convert");

module.exports = (avlData, imei) => {
  let gpsData = avlData.records[0].gps;
  let ioElements = avlData.records[0].ioElements;
  let gpsTime = calGpsTime(
    `${ioElements[17].value}${ioElements[18].value}`,
    ioElements[19].value,
    ioElements[20].value,
    ioElements[21].value,
    ioElements[22].value,
    ioElements[23].value
  );
  return {
    gps_imei: imei,
    priority: avlData.records[0].priority,
    time: avlData.records[0].priority == "3" ? gpsTime : new Date().toString(),
    server_time: new Date().toString(),
    gps_time: gpsTime,
    longitude: gpsData.longitude.toString(),
    latitude: gpsData.latitude.toString(),
    altitude: gpsData.altitude.toString(),
    angle: gpsData.angle.toString(),
    satellites: gpsData.satellites.toString(),
    speed: gpsData.speed.toString(),
    gprs_power: ioElements[0].value ? "on" : "off",
    gps_power: ioElements[1].value ? "on" : "off",
    upgrade_status: ioElements[4].value ? "enable" : "disable",
    check_antena_timer: ioElements[6].value,
    data_log_flag: ioElements[7].value ? "enable" : "disable",
    gps_sleep_mod_active: ioElements[8].value ? "enable" : "disable",
    gsm_sleep_mode: ioElements[9].value ? "enable" : "disable",
    car_door_open1: ioElements[10].value ? "open" : "close",
    car_door_open2: ioElements[11].value ? "open" : "close",
    car_switch_on: ioElements[12].value ? "on" : "off",
    car_window_open: ioElements[13].value ? "open" : "close",
    server_connection_time: ioElements[14].value,
    sim_quality: ioElements[15].value,
    mpu6050_exist: ioElements[16].value == "1" ? "exist" : "not exist",
    battery_voltage: (+ioElements[28].value / 100).toFixed(2),
    input_voltage: (+ioElements[29].value / 100).toFixed(2),
    upgrade_port: ioElements[30].value,
    period_send_alarm: ioElements[31].value,
    stop_gps_period_send_alarm: ioElements[32].value,
    period_connection_to_server: ioElements[33].value,
    number_off_gps_record_data: ioElements[36].value,
    number_off_gps_send_data: ioElements[37].value,
    upgrade_ip: convert(ioElements[38].value, "upgrade_ip"),
    frimware_version: generateSimNumber(ioElements[39].value, "", ""),
    simcard_number: generateSimNumber(
      ioElements[40].value,
      ioElements[41].value,
      ioElements[42].value
    ),
    sos_mobile_number1: generateSimNumber(
      ioElements[43].value,
      ioElements[44].value,
      ioElements[45].value
    ),
    sos_mobile_number2: generateSimNumber(
      ioElements[46].value,
      ioElements[47].value,
      ioElements[48].value
    ),
    sos_mobile_number3: generateSimNumber(
      ioElements[49].value,
      ioElements[50].value,
      ioElements[51].value
    ),
    simcard_charge: ioElements[52].value,
  };
};

function calGpsTime(year, month, day, hour, minutes, second) {
  const date = new Date(year, month, day, hour, minutes, second);
  const timeZoneOffset = -90; // -3.5 hours in minutes
  const convertedDate = new Date(date.getTime() + timeZoneOffset * 60 * 1000).toString();
  return convertedDate;
}
