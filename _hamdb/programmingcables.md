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
