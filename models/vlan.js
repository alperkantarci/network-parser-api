class Vlan {
  constructor(VLAN, Name, Status, Ports) {
    this.VLAN = VLAN;
    this.Name = Name;
    this.Status = Status;
    this.Ports = Ports;
  }
}

module.exports = Vlan;
