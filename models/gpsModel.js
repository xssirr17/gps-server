const sequelize = require("../db/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const gps = sequelize.define(
  "gps_data",
  {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    gps_imei: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    altitude: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    angle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    satellites: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    speed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gprs_power: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gps_power: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    upgrade_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    check_antena_timer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    data_log_flag: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gps_sleep_mod_active: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gsm_sleep_mode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    car_door_open1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    car_door_open2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    car_switch_on: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    car_window_open: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    server_connection_time: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sim_quality: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mpu6050_exist: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    battery_voltage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    input_voltage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    upgrade_port: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    period_send_alarm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stop_gps_period_send_alarm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    period_connection_to_server: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    number_off_gps_record_data: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    number_off_gps_send_data: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    upgrade_ip: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    frimware_version: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    simcard_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sos_mobile_number1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sos_mobile_number2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sos_mobile_number3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    simcard_charge: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gps_time: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    server_time: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    temp1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    temp2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = gps;
