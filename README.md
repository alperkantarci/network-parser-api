## Common setup

Clone the repo and install the dependencies.

```
git clone https://github.com/alperkantrc/network-parser-api.git
cd network-parser-api
```

```
npm install
```

## Start server

To start the express server, run the following

```
nodemon index.js
```

## Test API with REST Client

POST url:

```
localhost:3000/api/parseInput
```

POST body examples:

```json
{
  "input": "dellswitch#show ip interface\nDefault Gateway................................ 192.168.0.1\nL3 MAC Address................................. F48E.3823.7EBE\n\nRouting Interfaces:\n\nInterface    State   IP Address      IP Mask         Method\n----------   -----   --------------- --------------- -------\nVl1          Up      192.168.0.133   255.255.255.0   Manual\nVl66         Down    192.168.166.1   255.255.255.0   Manual\nVl77         Down    192.168.177.1   255.255.255.0   Manual\n\ndellswitch#quit"
}
```

```json
{
  "input": "Cisco2960#show vlan brief\nVLAN Name                             Status    Ports\n---- -------------------------------- --------- -------------------------------\n1    default                          active    Gi1/0/1, Gi1/0/2, Gi1/0/3\n                                                Gi1/0/4, Gi1/0/5, Gi1/0/6\n                                                Gi1/0/7, Gi1/0/8, Gi1/0/10\n                                                Gi1/0/11, Gi1/0/12, Gi1/0/13\n                                                Gi1/0/14, Gi1/0/15, Gi1/0/16\n                                                Gi1/0/17, Gi1/0/21, Gi1/0/22\n                                                Gi1/0/23, Gi1/0/24, Gi1/0/25\n                                                Gi1/0/26, Gi1/0/27, Gi1/0/28\n10   VLAN0010                         active    Gi1/0/9\n123  test_cihat                       active    \n230  qwerty                           active    Gi1/0/18, Gi1/0/19, Gi1/0/20\n456  456vlan                          active    \n1002 fddi-default                     act/unsup \n1003 token-ring-default               act/unsup \n1004 fddinet-default                  act/unsup \n1005 trnet-default                    act/unsup \nCisco2960#quit"
}
```
