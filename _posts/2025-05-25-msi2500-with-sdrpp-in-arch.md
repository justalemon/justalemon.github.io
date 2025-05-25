---
layout: post
title: "Using an MSi2500 with SDR++ in Arch Linux"
description: "My attempts to use an MSi2500 in SDR++ in Arch Linux and the proper steps to do it."
date: 2025-05-25 09:03:15 -0400
---

> If you just want the installation steps, just skip to the [Summary](#summary)

Back in April, I got my hands in this weird Chinese clone SDR (Software Defined Radio) of an SDRPlay RSP1. I got it for free from a friend that has an electronics store. Since then, I have tried to use it in Windows 11 and Arch Linux, and only managed to get it working in Arch Linux for SDR++.

## The MSi2500

The MSi2500 is a simple SDR that has the same style of chassis as the RTL-SDR, with a black anodized aluminium chassis, USB C female (unlike USB A male in the RTL-SDR) in one side and the SMA connectors in the right side.

![](/assets/img/posts/msi2500_photo.jpg)
![](/assets/img/posts/msi2500_board.jpg)

## Trying Windows

When you connect it via USB on Windows 11, it shows up as an Unknown device with a Vendor ID of 1DF7 and a Product ID of 2500. This matches a real SDRPlay RSP1.

![](/assets/img/posts/msi2500_devicemanager.png)

The first thing I tried was to see if the SDRPlay drivers worked, but sadly they didn't, as SDRPlay makes device checks to prevent the use of its software by clone devices.

![](/assets/img/posts/msi2500_windows1.png)
![](/assets/img/posts/msi2500_windows2.png)

## Trying Linux

Of course, the next thing I tried Arch Linux. As the programmer I am, I pulled my ThinkPad T480 and programming socks and got to work.

`lsusb` shows the same Vendor and Device IDs as Windows:

![](/assets/img/posts/msi2500_lsusb.png)

I started searching about possible device drivers and applications that could use this device.

I found the [RevSpace page for the MSi2500](https://revspace.nl/Msi2500SDR). In there it mentioned some default Kernel drivers, but those are not present in the `linux` package from the Arch repos, so I never had to use modprobe or a blacklist. It also mentioned the use of SoapySDR, but I wanted to use [SDR++](https://github.com/AlexandreRouma/SDRPlusPlus), and sadly the use of SoapySDR in SDR++ is depreated, and there is no information for SDR++ with the MSi2500.

That page also mentions the use of libmirisdr, but the original library has been outdated for quite I while. I did found a fork called [libmirisdr-5](https://github.com/ericek111/libmirisdr-5), which is a fork of [libmirisdr-4](https://github.com/f4exb/libmirisdr-4), which is a fork of [mirisdr-3-bsz](https://code.google.com/archive/p/libmirisdr-2/), which is a fork of libmirisdr-2, which is a fork of the original [libmirisdr](https://gitea.osmocom.org/sdr/libmirisdr) (its like a drawer).

Now, I had a library that I could try to use for the MSi2500, but now the question was how to get it working in Arch with SDR++. I went to the [AUR page for libmirisdr5-git](https://aur.archlinux.org/packages/libmirisdr5-git), and I noticed that one of the packages that requires libmirisdr5-git is called [sdrpp-mirisdr-source-git](https://aur.archlinux.org/packages/sdrpp-mirisdr-source-git). Jackpot.

I tried to install all 3 from the AUR, but it failed to install `libmirisdr5-git` due to a CMake comopatibility error, thankfully the error says that you can `add -DCMAKE_POLICY_VERSION_MINIMUM=3.5 to try configuring anyway`. I just manually edited the PKGBUILD and it was installed. After that we only needed `sdrpp-mirisdr-source-git`, but it compiled and installed without any issues.

After I opened SDR++, I only had to activate the plugin (scroll down on the left side), restart the program and it worked... kinda.

I checked a local FM radio here in Santiago, Chile to see if it could at least pick up strong FM signals, but I didn't got any activity.

![](/assets/img/posts/msi2500_arch1.png)

Just in case, I switched to my trusty RTL-SDR v4 and it picked up the station with no issues.

![](/assets/img/posts/msi2500_arch2.png)

I started playing with the different values in the menu, and I noticed that I had the gain in zero. Bumped it a little bit and volla! We have FM Reception.

![](/assets/img/posts/msi2500_arch3.png)

Of course, I tried to see if it could receive 2m band, and it does just fine, although I overloaded the device twice, which triggered a device restart once and a crash the second time. 147.425 MHz is received just fine from a Quansheng UV-K5:

![](/assets/img/posts/msi2500_arch4.png)

## Summary

To end, here is a summary of all of the steps you need to do in order to use the MSi2500 in SDR++:

1. Download the PKGBUILD and install SDR++ ([sdrpp-git](https://aur.archlinux.org/packages/sdrpp-git)) with the headers ([sdrpp-headers-git](https://aur.archlinux.org/packages/sdrpp-headers-git)) from the AUR
2. Download the PKGBUILD for libmirsdr-5 ([libmirisdr5-git](https://aur.archlinux.org/packages/libmirisdr5-git))
3. Edit the file and add `-DCMAKE_POLICY_VERSION_MINIMUM=3.5` to the cmake line inside of `build()`
4. Install libmirsdr-5
5. Download the PKGBUILD and install the SDR++ mirsdr source ([sdrpp-mirisdr-source-git](https://aur.archlinux.org/packages/sdrpp-mirisdr-source-git))
6. Add the libmirsdr source in SDR++
7. Restart SDR++
8. Select source and the device (if not selected already) and start listening

> If you need help, feel free to join my Discord server and ask for help.

## Special Thanks

I want to give special thanks to the following [YARC/Young Amateurs Radio Club](https://discord.gg/yarc) members for giving me a hand:

* Garry Sobleck [KE9CVT] (arthritisguy) and inverse4772 for helping me to identify the device
* inverse4772 for suggesting libmirisdr (I forgor)
* Rado Rusev [LZ2CFW] (radoraccoon) for some general help and suggestions
