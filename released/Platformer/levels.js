const color = {
    "floor": "black",
    "goal": "magenta",
    "death": "red",
    "debug": "blue",
    "white": "white",
    "empty": "#00000000"
}

var levels = [];

class platform {
    constructor(x, y, w, h, tag, fill = "none", outline = "none") {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.tag = tag;
        this.fill = fill;
        this.outline = outline;
        this.type = "rect";
    }

    init() {
        if (this.fill == "none") fill(color[this.tag]);
        else fill(color[this.fill]);
        if (this.outline != 'none') stroke(color[this.outline]);
        rect(this.x, this.y, this.w, this.h);
    }
}

class circlePlatform {
    constructor(x, y, radius, tag, fill = "none", outline = "none") {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.tag = tag;
        this.outline = outline;
        this.fill = fill;
        this.type = "circle";
    }

    init() {
        if (this.fill == 'none') fill(color[this.tag]);
        else fill(color[this.fill]);
        if (this.outline != 'none') stroke(color[this.outline]);
        circle(this.x, this.y, this.radius * 2);
    }
}

//Levels

//Level 1
var TempLevel = [];
TempLevel.push(new platform(0, 633, 960, 87, "floor"));
TempLevel.push(new platform(922, 320, 38, 313, "goal"));
levels.push(TempLevel);

//Level 2
var TempLevel = [];
TempLevel.push(new platform(2, 562, 224, 158, "floor"));
TempLevel.push(new platform(440, 160, 102, 560, "floor"));
TempLevel.push(new platform(620, 574, 340, 146, "floor"));
TempLevel.push(new platform(620, 540, 260, 35, 'floor'));
TempLevel.push(new platform(620, 520, 205, 20, 'floor'));
TempLevel.push(new platform(620, 490, 170, 30, 'floor'));
TempLevel.push(new platform(620, 455, 130, 35, 'floor'));
TempLevel.push(new platform(620, 425, 90, 30, 'floor'));
TempLevel.push(new platform(620, 395, 45, 30, 'floor'));
TempLevel.push(new platform(916, 196, 44, 378, "goal"));
levels.push(TempLevel);

//Level 3
var TempLevel = [];
TempLevel.push(new platform(0, 665, 105, 55, 'floor'));
TempLevel.push(new platform(175, 580, 25, 135, 'floor'));
TempLevel.push(new platform(320, 390, 35, 325, 'floor'));
TempLevel.push(new platform(455, 310, 25, 410, 'floor'));
TempLevel.push(new platform(480, 310, 130, 30, 'floor'));
TempLevel.push(new platform(695, 295, 265, 70, 'floor'));
TempLevel.push(new circlePlatform(886, 238, 57, "goal"));
levels.push(TempLevel);

//Level 4
var TempLevel = [];
TempLevel.push(new platform(4, 624, 116, 68, 'floor'));
TempLevel.push(new platform(142, 602, 56, 52, 'death'));
TempLevel.push(new platform(214, 560, 24, 20, 'floor'));
TempLevel.push(new platform(294, 530, 92, 64, 'death'));
TempLevel.push(new platform(386, 466, 18, 16, 'floor'));
TempLevel.push(new platform(456, 414, 54, 52, 'death'));
TempLevel.push(new platform(522, 350, 28, 18, 'floor'));
TempLevel.push(new platform(562, 386, 48, 52, 'death'));
TempLevel.push(new platform(666, 408, 22, 26, 'floor'));
TempLevel.push(new platform(740, 386, 42, 44, 'death'));
TempLevel.push(new platform(786, 338, 174, 22, 'floor'));
TempLevel.push(new platform(936, 272, 24, 66, 'goal'));
levels.push(TempLevel);

//Level 5
var TempLevel = [];
TempLevel.push(new platform(28, 654, 192, 44, 'floor'));
TempLevel.push(new platform(540, 498, 6, 8, 'floor'));
TempLevel.push(new platform(716, 202, 110, 518, 'floor'));
TempLevel.push(new circlePlatform(690, 57, 48, 'goal'));
levels.push(TempLevel);

//Level 6
var TempLevel = [];
TempLevel.push(new platform(0, 674, 172, 46, 'floor'));
TempLevel.push(new platform(172, 674, 214, 46, 'death'));
TempLevel.push(new platform(308, 472, 78, 202, 'death'));
TempLevel.push(new platform(250, 512, 28, 14, 'floor'));
TempLevel.push(new platform(384, 472, 232, 28, 'floor'));
TempLevel.push(new platform(886, 238, 72, 482, 'death'));
TempLevel.push(new platform(736, 192, 224, 46, 'floor'));
TempLevel.push(new platform(930, 30, 30, 162, 'goal'));
TempLevel.push(new platform(706, 28, 254, 2, 'floor'));
levels.push(TempLevel);

//Level 7
var TempLevel = [];
TempLevel.push(new platform(0, 604, 238, 48, 'floor'));
TempLevel.push(new platform(238, 604, 230, 48, 'death'));
TempLevel.push(new platform(444, 428, 24, 176, 'death'));
TempLevel.push(new platform(444, 404, 24, 24, 'floor'));
TempLevel.push(new platform(468, 404, 138, 24, 'death'));
TempLevel.push(new platform(572, 306, 34, 98, 'death'));
TempLevel.push(new platform(572, 264, 126, 42, 'floor'));
TempLevel.push(new platform(766, 456, 6, 10, 'floor'));
TempLevel.push(new platform(858, 358, 102, 102, 'goal'));
TempLevel.push(new platform(894, 504, 66, 240, 'death'));
levels.push(TempLevel);

//Level 8
var TempLevel = [];
TempLevel.push(new platform(0, 656, 156, 42, 'floor'));
TempLevel.push(new platform(486, 556, 4, 8, 'floor'));
TempLevel.push(new platform(862, 416, 98, 56, 'floor'));
TempLevel.push(new circlePlatform(938, 392, 24, 'goal'));
levels.push(TempLevel);

//Level 9
var TempLevel = [];
TempLevel.push(new platform(0, 674, 958, 46, 'floor'));
TempLevel.push(new platform(102, 294, 120, 28, 'floor'));
TempLevel.push(new platform(142, 318, 34, 126, 'floor'));
TempLevel.push(new platform(228, 292, 30, 156, 'floor'));
TempLevel.push(new platform(300, 278, 28, 168, 'floor'));
TempLevel.push(new platform(254, 340, 52, 26, 'floor'));
TempLevel.push(new platform(344, 292, 26, 150, 'floor'));
TempLevel.push(new platform(364, 292, 80, 38, 'floor'));
TempLevel.push(new platform(362, 348, 78, 34, 'floor'));
TempLevel.push(new platform(368, 416, 66, 26, 'floor'));
TempLevel.push(new platform(504, 294, 46, 148, 'floor'));
TempLevel.push(new platform(550, 294, 60, 36, 'floor'));
TempLevel.push(new platform(550, 350, 46, 34, 'floor'));
TempLevel.push(new platform(550, 410, 58, 32, 'floor'));
TempLevel.push(new platform(620, 278, 38, 158, 'floor'));
TempLevel.push(new platform(658, 278, 24, 40, 'floor'));
TempLevel.push(new platform(670, 316, 26, 46, 'floor'));
TempLevel.push(new platform(682, 362, 24, 44, 'floor'));
TempLevel.push(new platform(698, 404, 0, 2, 'floor'));
TempLevel.push(new platform(716, 278, 22, 156, 'floor'));
TempLevel.push(new platform(702, 400, 20, 32, 'floor'));
TempLevel.push(new platform(752, 282, 28, 158, 'floor'));
TempLevel.push(new platform(778, 290, 34, 38, 'floor'));
TempLevel.push(new platform(804, 322, 30, 38, 'floor'));
TempLevel.push(new platform(818, 358, 22, 30, 'floor'));
TempLevel.push(new platform(804, 376, 28, 30, 'floor'));
TempLevel.push(new platform(780, 394, 36, 34, 'floor'));
TempLevel.push(new platform(856, 278, 32, 118, 'floor'));
TempLevel.push(new platform(858, 410, 30, 42, 'goal'));
levels.push(TempLevel);

//Level 10
var TempLevel = [];
TempLevel.push(new platform(0, 674, 958, 46, 'floor'));
TempLevel.push(new platform(102, 294, 120, 28, 'floor'));
TempLevel.push(new platform(142, 318, 34, 126, 'floor'));
TempLevel.push(new platform(228, 292, 30, 156, 'floor'));
TempLevel.push(new platform(300, 278, 28, 168, 'floor'));
TempLevel.push(new platform(254, 340, 52, 26, 'floor'));
TempLevel.push(new platform(344, 292, 26, 150, 'floor'));
TempLevel.push(new platform(364, 292, 80, 38, 'floor'));
TempLevel.push(new platform(362, 348, 78, 34, 'floor'));
TempLevel.push(new platform(368, 416, 66, 26, 'floor'));
TempLevel.push(new platform(504, 294, 46, 148, 'floor'));
TempLevel.push(new platform(550, 294, 60, 36, 'floor'));
TempLevel.push(new platform(550, 350, 46, 34, 'floor'));
TempLevel.push(new platform(550, 410, 58, 32, 'floor'));
TempLevel.push(new platform(620, 278, 38, 158, 'floor'));
TempLevel.push(new platform(658, 278, 24, 40, 'floor'));
TempLevel.push(new platform(670, 316, 26, 46, 'floor'));
TempLevel.push(new platform(682, 362, 24, 44, 'floor'));
TempLevel.push(new platform(698, 404, 0, 2, 'floor'));
TempLevel.push(new platform(716, 278, 22, 156, 'floor'));
TempLevel.push(new platform(702, 400, 20, 32, 'floor'));
TempLevel.push(new platform(752, 282, 28, 158, 'floor'));
TempLevel.push(new platform(778, 290, 34, 38, 'floor'));
TempLevel.push(new platform(804, 322, 30, 38, 'floor'));
TempLevel.push(new platform(818, 358, 22, 30, 'floor'));
TempLevel.push(new platform(804, 376, 28, 30, 'floor'));
TempLevel.push(new platform(780, 394, 36, 34, 'floor'));
TempLevel.push(new platform(856, 278, 32, 118, 'floor'));
TempLevel.push(new platform(858, 410, 30, 42, 'goal'));
TempLevel.push(new platform(112, 160, 20, 58, 'floor'));
TempLevel.push(new platform(126, 160, 18, 18, 'floor'));
TempLevel.push(new platform(138, 176, 10, 18, 'floor'));
TempLevel.push(new platform(144, 192, 10, 16, 'floor'));
TempLevel.push(new platform(152, 160, 14, 56, 'floor'));
TempLevel.push(new platform(184, 160, 22, 18, 'floor'));
TempLevel.push(new platform(204, 178, 14, 26, 'floor'));
TempLevel.push(new platform(182, 202, 22, 14, 'floor'));
TempLevel.push(new platform(184, 198, 0, 2, 'floor'));
TempLevel.push(new platform(170, 174, 12, 28, 'floor'));
TempLevel.push(new platform(250, 154, 40, 20, 'floor'));
TempLevel.push(new platform(242, 172, 14, 20, 'floor'));
TempLevel.push(new platform(254, 192, 30, 14, 'floor'));
TempLevel.push(new platform(280, 204, 12, 14, 'floor'));
TempLevel.push(new platform(248, 216, 34, 12, 'floor'));
TempLevel.push(new platform(296, 164, 18, 64, 'floor'));
TempLevel.push(new platform(314, 164, 24, 12, 'floor'));
TempLevel.push(new platform(314, 184, 18, 16, 'floor'));
TempLevel.push(new platform(316, 212, 0, 2, 'floor'));
TempLevel.push(new platform(314, 214, 20, 14, 'floor'));
TempLevel.push(new platform(342, 162, 14, 68, 'floor'));
TempLevel.push(new platform(354, 166, 16, 14, 'floor'));
TempLevel.push(new platform(366, 178, 10, 14, 'floor'));
TempLevel.push(new platform(356, 186, 10, 14, 'floor'));
TempLevel.push(new platform(356, 200, 10, 16, 'floor'));
TempLevel.push(new platform(362, 212, 16, 16, 'floor'));
TempLevel.push(new platform(386, 158, 38, 16, 'floor'));
TempLevel.push(new platform(396, 172, 14, 46, 'floor'));
TempLevel.push(new platform(388, 214, 28, 16, 'floor'));
TempLevel.push(new platform(436, 158, 30, 26, 'floor'));
TempLevel.push(new platform(458, 180, 16, 34, 'floor'));
TempLevel.push(new platform(432, 202, 30, 20, 'floor'));
TempLevel.push(new platform(424, 176, 14, 42, 'floor'));
TempLevel.push(new platform(476, 168, 18, 48, 'floor'));
TempLevel.push(new platform(488, 200, 18, 18, 'floor'));
TempLevel.push(new platform(502, 194, 14, 16, 'floor'));
TempLevel.push(new platform(510, 180, 14, 18, 'floor'));
TempLevel.push(new platform(514, 162, 10, 22, 'floor'));
TempLevel.push(new platform(530, 160, 42, 16, 'floor'));
TempLevel.push(new platform(526, 172, 16, 22, 'floor'));
TempLevel.push(new platform(540, 186, 28, 12, 'floor'));
TempLevel.push(new platform(566, 196, 8, 18, 'floor'));
TempLevel.push(new platform(534, 210, 34, 12, 'floor'));
TempLevel.push(new platform(580, 164, 14, 56, 'floor'));
TempLevel.push(new platform(588, 202, 26, 20, 'floor'));
TempLevel.push(new platform(618, 158, 16, 28, 'floor'));
TempLevel.push(new platform(644, 160, 18, 28, 'floor'));
TempLevel.push(new platform(632, 184, 12, 40, 'floor'));
TempLevel.push(new platform(676, 160, 44, 16, 'floor'));
TempLevel.push(new platform(686, 174, 16, 38, 'floor'));
TempLevel.push(new platform(674, 210, 36, 12, 'floor'));
TempLevel.push(new platform(724, 162, 50, 14, 'floor'));
TempLevel.push(new platform(738, 174, 16, 46, 'floor'));
TempLevel.push(new platform(792, 158, 42, 16, 'floor'));
TempLevel.push(new platform(802, 170, 16, 36, 'floor'));
TempLevel.push(new platform(788, 204, 42, 16, 'floor'));
TempLevel.push(new platform(836, 160, 40, 14, 'floor'));
TempLevel.push(new platform(834, 174, 10, 18, 'floor'));
TempLevel.push(new platform(842, 190, 28, 12, 'floor'));
TempLevel.push(new platform(870, 204, 12, 20, 'floor'));
TempLevel.push(new platform(844, 220, 26, 8, 'floor'));
levels.push(TempLevel);

//Level 11
var TempLevel = [];
TempLevel.push(new platform(80, 14, 22, 48, 'floor'));
TempLevel.push(new platform(102, 14, 14, 20, 'floor'));
TempLevel.push(new platform(114, 32, 10, 18, 'floor'));
TempLevel.push(new platform(126, 50, 8, 10, 'floor'));
TempLevel.push(new platform(134, 8, 16, 54, 'floor'));
TempLevel.push(new platform(166, 10, 20, 48, 'floor'));
TempLevel.push(new platform(186, 10, 28, 12, 'floor'));
TempLevel.push(new platform(206, 20, 12, 38, 'floor'));
TempLevel.push(new platform(186, 34, 22, 10, 'floor'));
TempLevel.push(new platform(234, 12, 14, 54, 'floor'));
TempLevel.push(new platform(248, 34, 20, 8, 'floor'));
TempLevel.push(new platform(268, 12, 12, 54, 'floor'));
TempLevel.push(new platform(326, 16, 64, 14, 'floor'));
TempLevel.push(new platform(352, 30, 16, 34, 'floor'));
TempLevel.push(new platform(334, 60, 20, 14, 'floor'));
TempLevel.push(new platform(404, 18, 16, 60, 'floor'));
TempLevel.push(new platform(420, 26, 14, 10, 'floor'));
TempLevel.push(new platform(436, 16, 10, 12, 'floor'));
TempLevel.push(new platform(420, 50, 14, 8, 'floor'));
TempLevel.push(new platform(432, 58, 16, 22, 'floor'));
TempLevel.push(new platform(-2, 620, 108, 48, 'floor'));
TempLevel.push(new platform(106, 264, 48, 236, 'floor'));
TempLevel.push(new platform(106, 188, 538, 40, 'floor'));
TempLevel.push(new platform(586, 260, 70, 228, 'floor'));
TempLevel.push(new platform(732, 800, 230, 72, 'floor'));
TempLevel.push(new circlePlatform(922, 392, 30, 'goal'));
TempLevel.push(new platform(106, 228, 548, 34, 'death'));
TempLevel.push(new platform(644, 188, 10, 44, 'death'));
TempLevel.push(new platform(152, 258, 436, 482, 'death'));
TempLevel.push(new platform(588, 486, 66, 250, 'death'));
TempLevel.push(new platform(652, 668, 78, 84, 'death'));
TempLevel.push(new platform(106, 500, 58, 258, 'death'));
TempLevel.push(new platform(2, 666, 106, 52, 'death'));
levels.push(TempLevel);

//Level 12
var TempLevel = [];
TempLevel.push(new platform(0, 256, 84, 58, 'floor'));
TempLevel.push(new platform(306, 390, 202, 48, 'floor', "white", "floor"));
TempLevel.push(new platform(584, 154, 240, 42, 'floor', "white", "floor"));
TempLevel.push(new platform(204, 560, 142, 112, 'floor', "white", "floor"));
TempLevel.push(new platform(346, 558, 354, 114, 'death', "white", 'death'));
TempLevel.push(new platform(460, 556, 170, 66, 'floor', "white", "floor"));
TempLevel.push(new platform(722, 378, 64, 300, 'floor', "white", "floor"));
TempLevel.push(new platform(722, 326, 224, 58, 'death', "white", 'death'));
TempLevel.push(new circlePlatform(936, 266, 16, 'goal', "white", 'goal'));
levels.push(TempLevel);

//Level 13
var TempLevel = [];
TempLevel.push(new platform(24, 552, 12, 8, 'floor'));
TempLevel.push(new platform(34, 556, 8, 8, 'floor'));
TempLevel.push(new platform(16, 554, 8, 30, 'floor'));
TempLevel.push(new platform(22, 580, 14, 8, 'floor'));
TempLevel.push(new platform(34, 576, 8, 6, 'floor'));
TempLevel.push(new platform(52, 554, 16, 8, 'floor'));
TempLevel.push(new platform(66, 560, 8, 16, 'floor'));
TempLevel.push(new platform(46, 560, 8, 18, 'floor'));
TempLevel.push(new platform(52, 580, 16, 6, 'floor'));
TempLevel.push(new platform(78, 554, 6, 38, 'floor'));
TempLevel.push(new platform(84, 558, 4, 12, 'floor'));
TempLevel.push(new platform(88, 566, 6, 12, 'floor'));
TempLevel.push(new platform(94, 554, 6, 32, 'floor'));
TempLevel.push(new platform(114, 554, 14, 6, 'floor'));
TempLevel.push(new platform(126, 560, 6, 6, 'floor'));
TempLevel.push(new platform(106, 558, 8, 22, 'floor'));
TempLevel.push(new platform(112, 578, 14, 8, 'floor'));
TempLevel.push(new platform(120, 568, 12, 6, 'floor'));
TempLevel.push(new platform(126, 572, 6, 8, 'floor'));
TempLevel.push(new platform(138, 554, 6, 30, 'death'));
TempLevel.push(new platform(144, 554, 14, 6, 'death'));
TempLevel.push(new platform(156, 558, 4, 8, 'death'));
TempLevel.push(new platform(142, 566, 16, 6, 'death'));
TempLevel.push(new platform(152, 572, 10, 6, 'death'));
TempLevel.push(new platform(156, 576, 6, 10, 'death'));
TempLevel.push(new platform(168, 554, 8, 40, 'floor'));
TempLevel.push(new platform(176, 554, 14, 8, 'floor'));
TempLevel.push(new platform(184, 560, 6, 32, 'floor'));
TempLevel.push(new platform(174, 568, 12, 6, 'floor'));
TempLevel.push(new platform(194, 554, 24, 6, 'death'));
TempLevel.push(new platform(202, 560, 6, 26, 'death'));
TempLevel.push(new platform(220, 554, 8, 22, 'floor'));
TempLevel.push(new platform(238, 554, 6, 24, 'floor'));
TempLevel.push(new platform(220, 576, 24, 10, 'floor'));
TempLevel.push(new platform(250, 554, 6, 32, 'death'));
TempLevel.push(new platform(256, 580, 14, 6, 'death'));
TempLevel.push(new platform(272, 554, 8, 32, 'floor'));
TempLevel.push(new platform(280, 554, 18, 8, 'floor'));
TempLevel.push(new platform(294, 562, 4, 24, 'floor'));
TempLevel.push(new platform(280, 568, 14, 6, 'floor'));
TempLevel.push(new platform(302, 554, 24, 6, 'death'));
TempLevel.push(new platform(310, 558, 6, 28, 'death'));
TempLevel.push(new platform(268, 562, 4, 14, 'floor'));
TempLevel.push(new platform(328, 554, 6, 32, 'floor'));
TempLevel.push(new platform(338, 560, 6, 16, 'death'));
TempLevel.push(new platform(342, 552, 20, 8, 'death'));
TempLevel.push(new platform(358, 560, 8, 16, 'death'));
TempLevel.push(new platform(340, 576, 24, 8, 'death'));
TempLevel.push(new platform(370, 554, 6, 32, 'floor'));
TempLevel.push(new platform(376, 554, 4, 12, 'floor'));
TempLevel.push(new platform(380, 564, 4, 12, 'floor'));
TempLevel.push(new platform(384, 572, 4, 10, 'floor'));
TempLevel.push(new platform(388, 554, 6, 32, 'floor'));
TempLevel.push(new platform(402, 552, 14, 8, 'death'));
TempLevel.push(new platform(412, 558, 10, 6, 'death'));
TempLevel.push(new platform(398, 558, 8, 12, 'death'));
TempLevel.push(new platform(406, 566, 16, 8, 'death'));
TempLevel.push(new platform(416, 574, 6, 8, 'death'));
TempLevel.push(new platform(400, 578, 18, 8, 'death'));
TempLevel.push(new platform(438, 554, 6, 32, 'floor'));
TempLevel.push(new platform(444, 566, 12, 8, 'floor'));
TempLevel.push(new platform(444, 554, 14, 6, 'floor'));
TempLevel.push(new platform(466, 552, 20, 10, 'death'));
TempLevel.push(new platform(460, 560, 10, 24, 'death'));
TempLevel.push(new platform(468, 580, 16, 8, 'death'));
TempLevel.push(new platform(482, 562, 8, 20, 'death'));
TempLevel.push(new platform(494, 554, 6, 32, 'floor'));
TempLevel.push(new platform(500, 554, 18, 6, 'floor'));
TempLevel.push(new platform(510, 560, 8, 8, 'floor'));
TempLevel.push(new platform(500, 568, 12, 6, 'floor'));
TempLevel.push(new platform(510, 574, 8, 12, 'floor'));
TempLevel.push(new platform(534, 554, 6, 32, 'death'));
TempLevel.push(new platform(542, 554, 0, 4, 'death'));
TempLevel.push(new platform(540, 554, 4, 14, 'death'));
TempLevel.push(new platform(542, 568, 6, 10, 'death'));
TempLevel.push(new platform(544, 578, 6, 8, 'death'));
TempLevel.push(new platform(548, 566, 4, 14, 'death'));
TempLevel.push(new platform(550, 558, 4, 10, 'death'));
TempLevel.push(new platform(554, 552, 8, 10, 'death'));
TempLevel.push(new platform(558, 560, 4, 26, 'death'));
TempLevel.push(new platform(566, 552, 8, 34, 'floor'));
TempLevel.push(new platform(574, 552, 18, 8, 'floor'));
TempLevel.push(new platform(586, 558, 6, 30, 'floor'));
TempLevel.push(new platform(576, 568, 12, 6, 'floor'));
TempLevel.push(new platform(598, 554, 4, 32, 'death'));
TempLevel.push(new platform(602, 562, 12, 4, 'death'));
TempLevel.push(new platform(608, 560, 2, 0, 'death'));
TempLevel.push(new platform(608, 556, 12, 6, 'death'));
TempLevel.push(new platform(602, 566, 10, 8, 'death'));
TempLevel.push(new platform(608, 576, 8, 6, 'death'));
TempLevel.push(new platform(614, 582, 8, 4, 'death'));
TempLevel.push(new platform(624, 554, 8, 32, 'floor'));
TempLevel.push(new platform(634, 554, 8, 34, 'death'));
TempLevel.push(new platform(642, 552, 4, 14, 'death'));
TempLevel.push(new platform(646, 562, 4, 14, 'death'));
TempLevel.push(new platform(650, 570, 4, 16, 'death'));
TempLevel.push(new platform(654, 552, 6, 32, 'death'));
TempLevel.push(new platform(660, 584, 0, 2, 'floor'));
TempLevel.push(new platform(680, 554, 6, 6, 'floor'));
TempLevel.push(new platform(672, 554, 8, 6, 'floor'));
TempLevel.push(new platform(664, 558, 10, 28, 'floor'));
TempLevel.push(new platform(674, 576, 10, 12, 'floor'));
TempLevel.push(new platform(678, 570, 12, 6, 'floor'));
TempLevel.push(new platform(684, 574, 0, 2, 'floor'));
TempLevel.push(new platform(686, 576, 6, 10, 'floor'));
TempLevel.push(new platform(684, 556, 8, 10, 'floor'));
TempLevel.push(new platform(708, 554, 6, 32, 'death'));
TempLevel.push(new platform(716, 554, 24, 6, 'floor'));
TempLevel.push(new platform(726, 560, 6, 26, 'floor'));
TempLevel.push(new platform(754, 554, 20, 6, 'floor'));
TempLevel.push(new platform(762, 558, 4, 28, 'floor'));
TempLevel.push(new platform(780, 554, 6, 32, 'death'));
TempLevel.push(new platform(786, 566, 16, 6, 'death'));
TempLevel.push(new platform(798, 554, 6, 32, 'death'));
TempLevel.push(new platform(808, 554, 8, 32, 'floor'));
TempLevel.push(new platform(822, 552, 18, 8, 'death'));
TempLevel.push(new platform(820, 560, 6, 10, 'death'));
TempLevel.push(new platform(826, 566, 16, 8, 'death'));
TempLevel.push(new platform(836, 574, 8, 6, 'death'));
TempLevel.push(new platform(820, 576, 8, 6, 'death'));
TempLevel.push(new platform(826, 582, 16, 6, 'death'));
TempLevel.push(new platform(858, 552, 6, 34, 'floor'));
TempLevel.push(new platform(864, 566, 12, 6, 'floor'));
TempLevel.push(new platform(864, 554, 16, 8, 'floor'));
TempLevel.push(new platform(884, 554, 8, 32, 'death'));
TempLevel.push(new platform(892, 554, 18, 4, 'death'));
TempLevel.push(new platform(902, 558, 8, 28, 'death'));
TempLevel.push(new platform(892, 566, 10, 6, 'death'));
TempLevel.push(new platform(912, 554, 6, 32, 'floor'));
TempLevel.push(new platform(918, 554, 18, 6, 'floor'));
TempLevel.push(new platform(930, 560, 6, 6, 'floor'));
TempLevel.push(new platform(918, 568, 12, 6, 'floor'));
TempLevel.push(new platform(928, 576, 8, 12, 'floor'));
TempLevel.push(new platform(704, 166, 16, 12, 'goal'));
TempLevel.push(new platform(716, 174, 14, 12, 'goal'));
TempLevel.push(new platform(728, 182, 18, 14, 'goal'));
TempLevel.push(new platform(738, 190, 20, 14, 'goal'));
TempLevel.push(new platform(752, 198, 18, 14, 'goal'));
TempLevel.push(new platform(764, 208, 18, 12, 'goal'));
TempLevel.push(new platform(778, 216, 22, 16, 'goal'));
TempLevel.push(new platform(796, 228, 16, 12, 'goal'));
TempLevel.push(new platform(776, 240, 40, 4, 'goal'));
TempLevel.push(new platform(810, 204, 8, 38, 'goal'));
TempLevel.push(new platform(-44, 576, 2, 6, 'goal'));
TempLevel.push(new circlePlatform(892, 288, 48, 'goal'));
levels.push(TempLevel);

//Level 14
var TempLevel = [];
TempLevel.push(new platform(0, 628, 118, 54, 'floor'));
TempLevel.push(new platform(410, 630, 128, 26, 'floor'));
TempLevel.push(new platform(0, 682, 966, 40, 'death'));
TempLevel.push(new platform(956, 628, 4, 52, 'death'));
TempLevel.push(new platform(956, 524, 4, 102, 'goal'));
levels.push(TempLevel);

//Level 15
var TempLevel = [];
TempLevel.push(new circlePlatform(320, 132, 10, 'floor'));
TempLevel.push(new circlePlatform(646, 186, 6, 'floor'));
TempLevel.push(new circlePlatform(204, 348, 4, 'floor'));
TempLevel.push(new circlePlatform(462, 370, 4, 'floor'));
TempLevel.push(new circlePlatform(320, 428, 14, 'floor'));
TempLevel.push(new circlePlatform(624, 360, 9, 'floor'));
TempLevel.push(new circlePlatform(640, 560, 4, 'floor'));
TempLevel.push(new circlePlatform(762, 536, 8, 'floor'));
TempLevel.push(new circlePlatform(776, 464, 6, 'floor'));
TempLevel.push(new platform(-10, 556, 234, 72, 'floor'));
TempLevel.push(new circlePlatform(892, 584, 10, 'goal'));
levels.push(TempLevel);

//Level 16
var TempLevel = [];
TempLevel.push(new platform(124, 286, 306, 8, 'floor'));
TempLevel.push(new platform(24, 552, 98, 24, 'floor'));
TempLevel.push(new platform(0, 570, 144, 84, 'death'));
TempLevel.push(new platform(572, 524, 218, 126, 'death'));
TempLevel.push(new platform(488, 48, 290, 166, 'death'));
TempLevel.push(new platform(868, 572, 4, 148, 'goal'));
TempLevel.push(new platform(524, 430, 286, 20, 'floor'));
levels.push(TempLevel);

//Level 17
var TempLevel = [];
TempLevel.push(new platform(0, 508, 6, 46, 'floor'));
TempLevel.push(new platform(-2, 658, 152, 74, 'floor'));
TempLevel.push(new platform(96, 504, 58, 50, 'floor'));
TempLevel.push(new platform(446, 614, 22, 22, 'floor'));
TempLevel.push(new platform(406, 216, 264, 42, 'floor'));
TempLevel.push(new platform(8, 18, 8, 32, 'death'));
TempLevel.push(new platform(16, 18, 14, 8, 'death'));
TempLevel.push(new platform(16, 32, 10, 6, 'death'));
TempLevel.push(new platform(16, 46, 12, 4, 'death'));
TempLevel.push(new platform(36, 18, 24, 6, 'death'));
TempLevel.push(new platform(52, 24, 6, 4, 'death'));
TempLevel.push(new platform(48, 28, 6, 6, 'death'));
TempLevel.push(new platform(42, 34, 8, 4, 'death'));
TempLevel.push(new platform(38, 38, 8, 8, 'death'));
TempLevel.push(new platform(38, 46, 20, 4, 'death'));
TempLevel.push(new platform(76, 20, 2, 32, 'death'));
TempLevel.push(new platform(80, 48, 0, 2, 'death'));
TempLevel.push(new platform(78, 50, 12, 2, 'death'));
TempLevel.push(new platform(92, 22, 4, 14, 'death'));
TempLevel.push(new platform(96, 38, 4, 10, 'death'));
TempLevel.push(new platform(100, 48, 2, 6, 'death'));
TempLevel.push(new platform(102, 38, 4, 8, 'death'));
TempLevel.push(new platform(106, 22, 4, 14, 'death'));
TempLevel.push(new platform(114, 20, 4, 34, 'death'));
TempLevel.push(new platform(120, 46, 14, 8, 'death'));
TempLevel.push(new platform(164, 22, 2, 30, 'death'));
TempLevel.push(new platform(154, 18, 22, 8, 'death'));
TempLevel.push(new platform(166, 24, 4, 28, 'death'));
TempLevel.push(new platform(186, 20, 4, 32, 'death'));
TempLevel.push(new platform(198, 18, 4, 32, 'death'));
TempLevel.push(new platform(202, 18, 4, 8, 'death'));
TempLevel.push(new platform(206, 26, 6, 6, 'death'));
TempLevel.push(new platform(212, 32, 4, 8, 'death'));
TempLevel.push(new platform(218, 28, 4, 6, 'death'));
TempLevel.push(new platform(222, 20, 6, 8, 'death'));
TempLevel.push(new platform(228, 20, 6, 30, 'death'));
TempLevel.push(new platform(240, 20, 8, 32, 'death'));
TempLevel.push(new platform(250, 22, 2, 2, 'death'));
TempLevel.push(new platform(250, 20, 16, 8, 'death'));
TempLevel.push(new platform(250, 32, 14, 6, 'death'));
TempLevel.push(new platform(248, 44, 18, 8, 'death'));
TempLevel.push(new platform(274, 20, 10, 18, 'death'));
TempLevel.push(new platform(276, 42, 8, 10, 'death'));
TempLevel.push(new platform(514, 720, 2, 0, 'death'));
TempLevel.push(new circlePlatform(700, 652, 27, 'goal'));
TempLevel.push(new platform(544, 652, 326, 60, 'death'));
levels.push(TempLevel);

//Level 18
var TempLevel = [];
TempLevel.push(new platform(184, 176, 194, 52, 'goal'));
TempLevel.push(new platform(242, 224, 68, 148, 'goal'));
TempLevel.push(new platform(124, 366, 120, 56, 'goal'));
TempLevel.push(new platform(468, 178, 78, 266, 'goal'));
TempLevel.push(new platform(542, 250, 80, 80, 'goal'));
TempLevel.push(new platform(608, 172, 76, 86, 'goal'));
TempLevel.push(new platform(600, 334, 72, 106, 'goal'));
TempLevel.push(new platform(756, 210, 14, 14, 'goal'));
TempLevel.push(new platform(808, 210, 12, 16, 'goal'));
TempLevel.push(new platform(722, 240, 16, 14, 'goal'));
TempLevel.push(new platform(742, 260, 80, 22, 'goal'));
TempLevel.push(new platform(824, 242, 26, 20, 'goal'));
TempLevel.push(new platform(0, 652, 1082, 124, 'floor'));
levels.push(TempLevel);

//Level 19
var TempLevel = [];
TempLevel.push(new platform(0, 576, 838, 146, 'death'));
TempLevel.push(new platform(834, 458, 126, 264, 'floor'));
TempLevel.push(new platform(12, 536, 66, 40, 'floor'));
TempLevel.push(new platform(346, 416, 6, 6, 'floor'));
TempLevel.push(new platform(574, 334, 6, 8, 'floor'));
TempLevel.push(new platform(834, 0, 126, 238, 'floor'));
TempLevel.push(new platform(844, 226, 18, 24, 'death'));
TempLevel.push(new platform(876, 224, 24, 30, 'death'));
TempLevel.push(new platform(926, 218, 20, 38, 'death'));
TempLevel.push(new platform(856, 456, 16, 18, 'death'));
TempLevel.push(new platform(898, 456, 14, 14, 'death'));
TempLevel.push(new platform(930, 456, 16, 14, 'death'));
TempLevel.push(new circlePlatform(974, 348, 67, 'goal'));
levels.push(TempLevel);

//Level 20
var TempLevel = [];
TempLevel.push(new platform(0, 654, 148, 92, 'floor'));
TempLevel.push(new circlePlatform(256, 466, 3, 'floor'));
TempLevel.push(new circlePlatform(478, 394, 10, 'floor'));
TempLevel.push(new circlePlatform(194, 178, 8, 'floor'));
TempLevel.push(new circlePlatform(666, 214, 6, 'floor'));
TempLevel.push(new circlePlatform(832, 388, 10, 'floor'));
TempLevel.push(new circlePlatform(864, 376, 14, 'goal'));
TempLevel.push(new circlePlatform(920, 668, 3, 'floor'));
levels.push(TempLevel);

//Level 21
var TempLevel = [];
TempLevel.push(new platform(406, 114, 2, 40, 'death'));
TempLevel.push(new platform(540, 114, 2, 40, 'goal'));
TempLevel.push(new platform(242, 434, 124, 2, 'floor'));
TempLevel.push(new platform(242, 452, 124, 2, 'death'));
TempLevel.push(new platform(28, 598, 60, 26, 'floor'));
TempLevel.push(new platform(0, 598, 2, 76, 'floor'));
TempLevel.push(new platform(130, 598, 2, 76, 'death'));
TempLevel.push(new platform(488, 558, 6, 76, 'death'));
TempLevel.push(new platform(550, 558, 2, 76, 'floor'));
TempLevel.push(new platform(632, 236, 190, 2, 'floor'));
TempLevel.push(new platform(634, 308, 190, 4, 'death'));
levels.push(TempLevel);

//Level 22
var TempLevel = [];
TempLevel.push(new platform(382, 0, 94, 2, 'floor'));
TempLevel.push(new platform(382, 234, 94, 2, 'death'));
TempLevel.push(new platform(374, 464, 102, 2, 'death'));
TempLevel.push(new platform(374, 718, 102, 2, 'floor'));
TempLevel.push(new platform(6, 660, 182, 60, 'floor'));
TempLevel.push(new platform(662, 396, 2, 66, 'floor'));
TempLevel.push(new platform(956, 398, 4, 64, 'death'));
TempLevel.push(new circlePlatform(834, 350, 40, 'goal'));
levels.push(TempLevel);

//Level 23
var TempLevel = [];
TempLevel.push(new platform(18, 624, 96, 38, 'floor'));
TempLevel.push(new platform(2, 634, 0, 48, 'floor'));
TempLevel.push(new platform(132, 634, 4, 48, 'death'));
TempLevel.push(new platform(0, 636, 2, 46, 'floor'));
TempLevel.push(new platform(422, 530, 2, 16, 'floor'));
TempLevel.push(new platform(606, 528, 2, 18, 'death'));
TempLevel.push(new platform(776, 502, 2, 4, 'goal'));
TempLevel.push(new platform(778, 504, 2, 6, 'goal'));
TempLevel.push(new platform(780, 510, 2, 8, 'goal'));
TempLevel.push(new platform(782, 520, 2, 6, 'goal'));
TempLevel.push(new platform(798, 548, 6, 2, 'goal'));
TempLevel.push(new platform(798, 552, 2, 4, 'goal'));
TempLevel.push(new platform(778, 474, 2, 2, 'goal'));
TempLevel.push(new platform(786, 480, 2, 4, 'goal'));
TempLevel.push(new platform(792, 490, 2, 4, 'goal'));
levels.push(TempLevel);

//Level 24
var TempLevel = [];
TempLevel.push(new platform(102, 50, 824, 8, 'death'));
TempLevel.push(new platform(96, 54, 10, 508, 'death'));
TempLevel.push(new platform(100, 560, 734, 2, 'floor'));
TempLevel.push(new platform(828, 150, 4, 414, 'floor'));
TempLevel.push(new platform(294, 150, 534, 4, 'floor'));
TempLevel.push(new platform(290, 154, 4, 318, 'death'));
TempLevel.push(new platform(292, 462, 300, 8, 'floor'));
TempLevel.push(new platform(406, 362, 128, 8, 'death'));
TempLevel.push(new platform(598, 236, 6, 8, 'floor'));
TempLevel.push(new platform(604, 242, 8, 10, 'floor'));
TempLevel.push(new platform(612, 252, 4, 10, 'floor'));
TempLevel.push(new platform(616, 262, 8, 10, 'floor'));
TempLevel.push(new platform(624, 272, 8, 6, 'floor'));
TempLevel.push(new platform(632, 280, 6, 8, 'floor'));
TempLevel.push(new platform(638, 288, 6, 10, 'floor'));
TempLevel.push(new platform(644, 298, 10, 8, 'floor'));
TempLevel.push(new platform(652, 308, 8, 8, 'floor'));
TempLevel.push(new platform(660, 318, 6, 8, 'floor'));
TempLevel.push(new platform(666, 326, 4, 8, 'floor'));
TempLevel.push(new platform(672, 334, 4, 8, 'floor'));
TempLevel.push(new platform(678, 342, 8, 8, 'floor'));
TempLevel.push(new platform(686, 354, 8, 10, 'floor'));
TempLevel.push(new platform(698, 368, 10, 10, 'floor'));
TempLevel.push(new platform(710, 382, 8, 8, 'floor'));
TempLevel.push(new platform(724, 396, 8, 14, 'floor'));
TempLevel.push(new platform(738, 416, 4, 8, 'floor'));
TempLevel.push(new platform(748, 430, 10, 14, 'floor'));
TempLevel.push(new platform(762, 450, 8, 14, 'floor'));
TempLevel.push(new platform(522, 232, 6, 12, 'floor'));
TempLevel.push(new platform(508, 250, 12, 14, 'floor'));
TempLevel.push(new platform(490, 268, 14, 16, 'floor'));
TempLevel.push(new platform(472, 286, 16, 16, 'floor'));
TempLevel.push(new platform(450, 304, 20, 18, 'floor'));
TempLevel.push(new platform(432, 328, 14, 14, 'floor'));
TempLevel.push(new platform(412, 350, 12, 16, 'floor'));
TempLevel.push(new platform(-2, 644, 924, 8, 'floor'));
TempLevel.push(new platform(920, 50, 4, 602, 'floor'));
TempLevel.push(new circlePlatform(558, 364, 20, 'goal'));
levels.push(TempLevel);

//Level 25
var TempLevel = [];
TempLevel.push(new platform(-2, -2, 962, 44, 'floor'));
TempLevel.push(new platform(932, 38, 28, 686, 'floor'));
TempLevel.push(new platform(-148, 682, 1082, 58, 'floor'));
TempLevel.push(new platform(-2, 40, 26, 680, 'floor'));
TempLevel.push(new platform(574, 250, 4, 14, 'goal'));
TempLevel.push(new platform(690, 250, 4, 14, 'death'));
TempLevel.push(new circlePlatform(492, 384, 12, 'death'));
TempLevel.push(new platform(344, 236, 16, 4, 'floor'));
TempLevel.push(new platform(280, 232, 10, 4, 'floor'));
TempLevel.push(new platform(290, 236, 10, 4, 'floor'));
TempLevel.push(new platform(254, 226, 20, 4, 'floor'));
TempLevel.push(new platform(138, 196, 14, 4, 'floor'));
TempLevel.push(new platform(144, 194, 14, 6, 'floor'));
TempLevel.push(new platform(130, 192, 6, 6, 'floor'));
TempLevel.push(new platform(380, 232, 24, 6, 'floor'));
TempLevel.push(new platform(308, 232, 16, 6, 'floor'));
levels.push(TempLevel);

//Level 26
var TempLevel = [];
TempLevel.push(new platform(322, 636, 12, 4, 'floor'));
TempLevel.push(new circlePlatform(120, 622, 37, 'floor'));
TempLevel.push(new platform(658, 540, 18, 4, 'goal'));
TempLevel.push(new platform(498, 628, 10, 4, 'floor'));
levels.push(TempLevel);

//Level 27
var TempLevel = [];
TempLevel.push(new platform(-330, 586, 2, 0, 'floor'));
TempLevel.push(new platform(660, 342, 222, 412, 'floor'));
TempLevel.push(new platform(388, 388, 2, 374, 'floor'));
TempLevel.push(new platform(-58, 664, 346, 10, 'floor'));
TempLevel.push(new platform(344, 262, 170, 12, 'floor'));
TempLevel.push(new platform(524, 578, 8, 160, 'floor'));
TempLevel.push(new platform(620, 0, 412, 212, 'floor'));
TempLevel.push(new circlePlatform(790, 204, 120, 'death', "white", "white"));
levels.push(TempLevel);

//Level 28
var TempLevel = [];
TempLevel.push(new platform(0, 638, 200, 18, 'floor'));
TempLevel.push(new platform(724, 682, 6, 42, 'floor'));
TempLevel.push(new platform(948, 0, 16, 728, 'goal'));
TempLevel.push(new platform(730, 0, 6, 40, 'floor'));
levels.push(TempLevel);

//Level 29
var TempLevel = [];
TempLevel.push(new platform(-2, 708, 1152, 22, 'death'));
TempLevel.push(new platform(-4, 664, 150, 44, 'floor'));
TempLevel.push(new platform(300, 382, 10, 328, 'floor'));
TempLevel.push(new platform(434, 282, 14, 438, 'floor'));
TempLevel.push(new platform(550, 136, 14, 574, 'floor'));
TempLevel.push(new platform(690, 240, 276, 8, 'floor'));
TempLevel.push(new circlePlatform(-238, 582, 3, 'floor'));
TempLevel.push(new circlePlatform(878, 156, 48, 'goal'));
levels.push(TempLevel);

//Level 30
var TempLevel = [];
TempLevel.push(new platform(420, 488, 4, 2, 'floor'));
TempLevel.push(new circlePlatform(824, 370, 3, 'floor'));
TempLevel.push(new platform(-22, -8, 14, 772, 'death'));
TempLevel.push(new platform(-20, 658, 1064, 192, 'death'));
TempLevel.push(new platform(888, -20, 80, 760, 'death'));
TempLevel.push(new platform(772, 402, 138, 274, 'death'));
TempLevel.push(new platform(672, 434, 106, 238, 'death'));
TempLevel.push(new platform(502, 454, 172, 218, 'death'));
TempLevel.push(new platform(362, 516, 154, 160, 'death'));
TempLevel.push(new platform(-42, -6, 56, 676, 'death'));
TempLevel.push(new platform(12, 656, 192, 30, 'floor'));
TempLevel.push(new platform(742, 216, 110, 24, 'goal'));
levels.push(TempLevel);

//Level 31
var TempLevel = [];
TempLevel.push(new circlePlatform(60, 684, 20, 'floor', 'empty', 'empty'));
TempLevel.push(new platform(242, 170, 118, 6, 'goal'));
TempLevel.push(new platform(426, 470, 18, 2, 'floor'));
TempLevel.push(new platform(716, 342, 120, 2, 'floor'));
TempLevel.push(new platform(392, 462, 96, 10, 'floor', "empty", "empty"));
levels.push(TempLevel);

//Level 32
var TempLevel = [];
TempLevel.push(new platform(-4, 708, 1030, 114, 'death', 'empty', 'empty'));
TempLevel.push(new circlePlatform(418, 708, 4, 'floor', 'empty', 'empty'));
TempLevel.push(new circlePlatform(540, 708, 3, 'floor', 'empty', 'empty'));
TempLevel.push(new circlePlatform(648, 706, 4, 'floor', 'empty', 'empty'));
TempLevel.push(new circlePlatform(578, 598, 6, 'goal', 'empty', 'empty'));
TempLevel.push(new platform(-8, 606, 176, 58, 'floor', 'empty', 'empty'));
TempLevel.push(new platform(-18, 660, 186, 92, 'floor', 'empty', 'empty'));
levels.push(TempLevel);

//Level 33
var TempLevel = [];
TempLevel.push(new circlePlatform(98, 442, 49, 'floor', 'empty', 'empty'));
TempLevel.push(new platform(190, 554, 2, 50, 'floor', 'empty', 'empty'));
TempLevel.push(new platform(624, 478, 94, 4, 'floor', 'empty', 'empty'));
TempLevel.push(new platform(496, 446, 8, 8, 'death', 'empty', 'empty'));
TempLevel.push(new platform(512, 438, 4, 4, 'death', 'empty', 'empty'));
TempLevel.push(new platform(538, 420, 4, 2, 'death', 'empty', 'empty'));
TempLevel.push(new platform(568, 400, 4, 4, 'death', 'empty', 'empty'));
TempLevel.push(new platform(660, 334, 2, 4, 'death', 'empty', 'empty'));
TempLevel.push(new platform(686, 314, 4, 8, 'death', 'empty', 'empty'));
TempLevel.push(new platform(710, 296, 4, 4, 'death', 'empty', 'empty'));
TempLevel.push(new platform(826, 672, 134, 44, 'goal', 'empty', 'empty'));
levels.push(TempLevel);

//Level 34
var TempLevel = [];
TempLevel.push(new platform(242, 560, 28, 20, 'floor'));
TempLevel.push(new platform(324, 564, 28, 20, 'floor'));
TempLevel.push(new circlePlatform(470, 466, 4, 'floor'));
TempLevel.push(new circlePlatform(488, 470, 6, 'floor'));
TempLevel.push(new circlePlatform(530, 470, 3, 'floor'));
TempLevel.push(new circlePlatform(594, 470, 4, 'floor'));
TempLevel.push(new circlePlatform(754, 472, 6, 'floor'));
TempLevel.push(new platform(466, 470, 322, 192, 'death'));
TempLevel.push(new circlePlatform(814, 484, 4, 'goal'));
TempLevel.push(new platform(194, 518, 10, 142, 'death'));
TempLevel.push(new platform(296, 474, 16, 202, 'death'));
TempLevel.push(new platform(400, 474, 24, 302, 'death'));
TempLevel.push(new platform(0, 658, 1008, 140, 'floor'));
levels.push(TempLevel);

//Level 35
var TempLevel = [];
TempLevel.push(new platform(-14, 682, 156, 14, 'floor'));
TempLevel.push(new platform(460, 524, 370, 4, 'floor'));
TempLevel.push(new platform(266, 284, 304, 16, 'floor'));
TempLevel.push(new platform(564, 396, 82, 4, 'floor'));
TempLevel.push(new circlePlatform(98, 70, 30, 'goal'));
levels.push(TempLevel);

//Level 36
var TempLevel = [];
TempLevel.push(new platform(24, 316, 242, 36, 'floor', 'empty', 'empty'));
TempLevel.push(new platform(340, 314, 56, 36, 'floor', 'empty', 'empty'));
TempLevel.push(new platform(516, 314, 60, 40, 'floor', 'empty', 'empty'));
TempLevel.push(new platform(662, 312, 66, 36, 'floor', 'empty', 'empty'));
TempLevel.push(new platform(800, 340, 22, 10, 'floor', 'empty', 'empty'));
TempLevel.push(new platform(850, 340, 22, 16, 'floor', 'empty', 'empty'));
TempLevel.push(new platform(-64, -8, 38, 580, 'floor', 'empty', 'empty'));
TempLevel.push(new platform(-4, 4, 20, 730, 'floor', 'empty', 'empty'));
TempLevel.push(new platform(930, -16, 40, 744, 'floor', 'empty', 'empty'));
TempLevel.push(new platform(-128, 628, 1120, 106, 'floor', 'empty', 'empty'));
TempLevel.push(new platform(270, 316, 58, 40, 'death', 'empty', 'empty'));
TempLevel.push(new platform(400, 316, 78, 42, 'death', 'empty', 'empty'));
TempLevel.push(new platform(582, 312, 76, 46, 'death', 'empty', 'empty'));
TempLevel.push(new platform(734, 310, 64, 46, 'death', 'empty', 'empty'));
TempLevel.push(new platform(828, 338, 20, 16, 'death', 'empty', 'empty'));
levels.push(TempLevel);