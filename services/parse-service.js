const RoutingInterface = require("../models/routing-interface");
const Vlan = require("../models/vlan");

const vlanColumns = {
  VLAN: 0,
  NAME: 1,
  STATUS: 2,
  PORTS: 3
};

const routingInterfaceColumns = {
  INTERFACE: 0,
  STATE: 1,
  IPADRESS: 2,
  IPMASK: 3,
  METHOD: 4
};

parseVlan = function(input) {
  let vlans = [];
  let lines = input.split("\n");
  let startIndex =
    lines.indexOf("VLAN Name                             Status    Ports") + 2;

  for (let i = startIndex; i < lines.length; i++) {
    let line = lines[i];
    // break loop if line is empty || if line includes "#"
    if (line === "" || line.includes("#")) break;
    // split by multiple spaces
    let columns = line.split(/\s+/);

    if (columns[vlanColumns.VLAN] !== "") {
      // if vlan column is not empty create new object and push it
      let vlan = new Vlan(
        columns[vlanColumns.VLAN],
        columns[vlanColumns.NAME],
        columns[vlanColumns.STATUS],
        columns[vlanColumns.PORTS]
      );

      // because there are spaces between (Gi1/0/1, Gi1/0/2, Gi1/0/3) ports values
      // split function creates more than 4 columns
      // 1-4 columns are -> (Vlan, Name, Status, Ports(first one))
      // 5-... columns are -> other Ports except first one
      // so concat other ports with first one
      for (let i = 4; i < columns.length; i++) {
        vlan.Ports = vlan.Ports.concat(" " + columns[i]);
      }

      vlans.push(vlan);
    } else {
      // if vlan columns is empty
      // find last vlan object in vlans array
      // and concat Ports columns with old Ports values
      let vlan = vlans[vlans.length - 1];

      for (let i = 1; i < columns.length; i++) {
        vlan.Ports = vlan.Ports.concat(" " + columns[i]);
      }
    }
  }

  return vlans;
};

parseRoutingInterface = function(input) {
  let routingInterfaces = [];
  let lines = input.split("\n");
  let startIndex = lines.indexOf("Routing Interfaces:") + 4;
  for (let i = startIndex; i < lines.length; i++) {
    // break loop on new line
    if (lines[i] === "") break;
    let line = lines[i];
    // split by multiple spaces
    let columns = line.split(/\s+/);

    let routingInterface = new RoutingInterface(
      columns[routingInterfaceColumns.INTERFACE],
      columns[routingInterfaceColumns.STATE],
      columns[routingInterfaceColumns.IPADRESS],
      columns[routingInterfaceColumns.IPMASK],
      columns[routingInterfaceColumns.METHOD]
    );
    routingInterfaces.push(routingInterface);
  }
  return routingInterfaces;
};

module.exports = {
  parseRoutingInterface,
  parseVlan
};
