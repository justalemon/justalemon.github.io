---
layout: home
title: Programming Cable Pinouts
---

# Programming Cable Pinouts

## Kenwood K1

![](/assets/img/db/socket_trs_2.5_and_3.5.svg)

The most common connector for portable radios, originally designed by Kenwood but later became a de facto standard. It uses a pair of TRS connectors, one 2.5mm and one 3.5mm, where the smaller one is usually at the top and the big one at the bottom. It takes TX, RX and GND directly. A common 8 in 1 programming cable usually has it marked as K1.

1. Not Connected
2. TX
3. Ground/GND
4. Not Connected
5. Not Connected
6. RX

## QYT 3.5mm

![](/assets/img/db/socket_trs.svg)

This cable and pinout is used on all mobile QYT transceivers like the KT-8900, KT-8900D and others.

1. TX
2. RX
3. Ground/GND

## Yaesu RJ11

![](/assets/img/db/socket_rj11.svg)

Some Yaesu models use the front RJ11 mic connector for programming. It appears to require extra passive components (resistor + diode) but I could not find their values (might be the same as the Mini Din Cable?). Pinout comes from page 10 of the official manual of the FT-2900R.

1. Data
2. Not Connected
3. Ground/GND
4. Not Connected
5. Not Connected
6. Not Connected

## Yaesu Mini Din 6 Pin

![](/assets/img/db/socket_mini_din_6.svg)

Other Yaesu models use the Data port on the back for programming, which is a 6 Pin Mini Din. It requires a diode betweeen TX and pin 4 (anode to TX, cathode to Pin 4). Most of the time, a 10k resistor between RX and VCC is added to pull the data line high. For more information, I recommend checking [this DIY video by LB5JJ](https://www.youtube.com/watch?v=4PVS3rZUMCE).

1. Not Connected
2. Not Connected
3. Not Connected
4. Data
5. Ground/GND
6. Not Connected

## Hyera H1

![](/assets/img/db/socket_trs_3.5_and_2.5.svg)

Simillar to the Kenwood K1, it also uses a pair of 2.5mm and 3.5mm connectors, but with smaller spacing between the two plugs, a different pinout, and they are flipped around (3.5mm on top and 2.5mm on the bottom, at least on my PD416). A common 8 in 1 programming cable usually has it marked as H1.

1. Not Connected
2. TX
3. Not Connected
4. Not Connected
5. RX
6. Ground/GND

## Motorola 2.5mm

![](/assets/img/db/socket_trs.svg)

This cable is used on old Motorola models, mostly non DMR HT Radios like the Motorola EP and PRO series of handies. It uses a single conductor for data with a diode between TX and pin 2 (anode to TX, cathode to Pin 2). A common 8 in 1 programming cable usually has it marked as M1.

1. Not Connected
2. Data (RX directly + TX via Diode)
3. Ground/GND

## Motorola RJ45

![](/assets/img/db/socket_rj45.svg)

Motorola uses a standard RJ-45 connector for programming their radios, but uses with a single pin for TX and RX. Pin 2 is connected directly to RX, but TX goes thru a diode (anode to TX, cathode to Pin 2). A common 8 in 1 programming cable usually has it marked as M2.

1. Not Connected
2. Data (RX directly + TX via Diode)
3. Not Connected
4. Not Connected
5. Ground/GND
6. Not Connected
7. Not Connected
8. Not Connected

###### TRS and TRRS Jack images [created by guidozz (CC0 1.0)](https://commons.wikimedia.org/wiki/File:Stereo_jack_connector.svg) and edited by me, RJ-11 and RJ-45 Jack [created by Sylvain Leroux (CC BY-SA 3.0)](https://commons.wikimedia.org/wiki/File:RJ-45_plug_and_jack.svg) and edited by me, Mini DIN 6 Pin [created by Mobius (Public Domain)](https://commons.wikimedia.org/wiki/File:MiniDIN-6_Connector_Pinout.svg) and edited by me.
