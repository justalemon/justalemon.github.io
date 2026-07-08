---
layout: home
title: Chilean Band Plan
---

<link rel="stylesheet" href="/assets/css/bandplan.css">

# Chilean Band Plan

Please note that CW/Morse/Telegraphy is allowed on all bands. The sections marked as CW are exclusive for CW.

{% for band in site.data.bandplan %}
## {{ band.name }}

{% if band.notes %}{{ band.notes }}{% endif %}

{% assign bandwidth = band.range.end | minus: band.range.start | times: 1.0 %}

{% for allocation in band.allocations %}
{% assign spaceStartBandwidth = allocation.start | minus: band.range.start %}
{% assign spaceEndBandwidth = band.range.end | minus: allocation.end %}
{% assign spaceStartPercentage = spaceStartBandwidth | times: 1.0 | divided_by: bandwidth | times: 100 %}
{% assign spaceEndPercentage = spaceEndBandwidth | times: 1.0 | divided_by: bandwidth | times: 100 %}
{% assign spaceMidPercentage = 100.0 | minus: spaceStartPercentage | minus: spaceEndPercentage %}

<div class="band">
    <div class="spacer" style="width: {{ spaceStartPercentage }}%">
    </div>
    <div class="info {{ allocation.mode }}" style="width: {{ spaceMidPercentage }}%;{% if spaceMidPercentage < 12.0 %}font-size: 9px;{% endif %}">
        <div class="pre">
            {{ allocation.start }}
        </div>
        <div class="mid">
            {{ allocation.description }}
        </div>
        <div class="post">
            {{  allocation.end }}
        </div>
    </div>
    <div class="spacer" style="width: {{ spaceEndPercentage }}%">
    </div>
</div>
{% endfor %}

{% endfor %}
