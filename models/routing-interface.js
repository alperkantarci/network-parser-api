class RoutingInterface {
  constructor(Interface, State, IpAddress, IpMask, Method) {
    this.Interface = Interface;
    this.State = State;
    this.IpAddress = IpAddress;
    this.IpMask = IpMask;
    this.Method = Method;
  }
}

module.exports = RoutingInterface;
