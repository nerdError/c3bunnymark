
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

let c3;

runOnStartup(async runtime =>
{
	c3 = runtime;
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	runtime.addEventListener("tick", () => update());
	c3.objects.bunny.getFirstInstance().destroy();
	onReady();
}

// ---------------------------------------------------------------------------------------------

var Math2 = {};

Math2.random = function(from, to)
{
	return Math.random()*(to-from) + from;
}

Math2.map = function(val, inputMin, inputMax, outputMin, outputMax)
{
	return ((outputMax - outputMin) * ((val - inputMin)/(inputMax - inputMin))) + outputMin;
}


Math2.randomPlusMinus = function(chance)
{
	chance = chance ? chance : 0.5;
	return (Math.random() > chance) ? -1 : 1;
}

Math2.randomInt = function(from, to)
{
	to += 1;
	return Math.floor(Math.random()*(to-from) + from);
}

Math2.randomBool = function(chance)
{
	chance = chance ? chance : 0.5;
	return (Math.random() < chance) ? true : false;
}

// ---------------------------------------------------------------------------------------------

// $(document).ready(onReady)

// $(window).resize(resize)
// window.onorientationchange = resize;

var width = 800;
var height = 600;

// var wabbitTexture;
// var pirateTexture;

var bunnys = [];
var gravity = 0.5//1.5 ;

var maxX = width;
var minX = 0;
var maxY = height;
var minY = 0;

var startBunnyCount = 2;
var isAdding = false;
var count = 0;
var container;
var pixiLogo;
var clickImage;

var amount = 100;

let stats;
let counter;
let bunnyType = 0;

function onReady()
{
	
// 	renderer = PIXI.autoDetectRenderer(800, 600, {backgroundColor:0xFFFFFF});
// 	stage = new PIXI.Stage(0xFFFFFF);
// 	//stage.filterArea = new PIXI.math.Rectangle(0, 0, 800 ,600);

// 	amount = (renderer instanceof PIXI.WebGLRenderer) ? 100 : 5;
//	
//	bloom = new PIXI.filters.BloomFilter();
	//stage.filters = [bloom];

// 	if(amount == 5)
// 	{
// 		renderer.context.mozImageSmoothingEnabled = false
// 		renderer.context.webkitImageSmoothingEnabled = false;
		
// 	}
	
// 	renderer.view.style["transform"] = "translatez(0)";
// 	//alert(amount)
// 	document.body.appendChild(renderer.view);
// 	renderer.view.style.position = "absolute";
	stats = new Stats();
	
	document.body.appendChild( stats.domElement );
	stats.domElement.style.position = "absolute";
	stats.domElement.style.top = "0px";
// 	requestAnimationFrame(update);
	
// 	wabbitTexture = new PIXI.Texture.fromImage("bunnys.png")

	counter = document.createElement("div");
	counter.className = "counter";
	document.body.appendChild( counter);
	
// 	pixiLogo = document.getElementById("pixi");
// 	clickImage = document.getElementById("clickImage");
	
	count = startBunnyCount;
	counter.innerHTML = count + " BUNNIES";
	
	
// 	container = new PIXI.DisplayObjectContainer();
// 	container = new PIXI.ParticleContainer(200000, [false, true, false, false, false]);
// 	stage.addChild(container);
	//var filter = new PIXI.filters.ColorMatrixFilter();

// 	bunny1 = new PIXI.Texture(wabbitTexture.baseTexture, new PIXI.math.Rectangle(2, 47, 26, 37));
// 	bunny2 = new PIXI.Texture(wabbitTexture.baseTexture, new PIXI.math.Rectangle(2, 86, 26, 37));
// 	bunny3 = new PIXI.Texture(wabbitTexture.baseTexture, new PIXI.math.Rectangle(2, 125, 26, 37));
// 	bunny4 = new PIXI.Texture(wabbitTexture.baseTexture, new PIXI.math.Rectangle(2, 164, 26, 37));
// 	bunny5 = new PIXI.Texture(wabbitTexture.baseTexture, new PIXI.math.Rectangle(2, 2, 26, 37));

// 	bunnyTextures = [bunny1, bunny2, bunny3, bunny4, bunny5];
// 	currentTexture = bunnyTextures[bunnyType];

	for (var i = 0; i < startBunnyCount; i++) 
	{
// 		var bunny = new PIXI.Sprite(currentTexture);
		let bunny = c3.objects.bunny.createInstance(0, 0, 0)
		bunny.animationFrame = bunnyType
		bunny.speedX = Math.random() * 10;
		bunny.speedY = (Math.random() * 10) - 5;
		
// 		bunny.anchor.x = 0.5;
// 		bunny.anchor.y = 1;
//

		bunnys.push(bunny);

// 		container.addChild(bunny);
	}
	
	
// 	$(renderer.view).mousedown(function(){
// 		isAdding = true;
// 	});
	
// 	$(renderer.view).mouseup(function(){
// 		bunnyType++
// 		bunnyType %= 5;
// 		currentTexture = bunnyTextures[bunnyType];

// 		isAdding = false;
// 	})
	
	document.addEventListener("pointerdown", onTouchStart, true);
	document.addEventListener("pointerup", onTouchEnd, true);
	
	
// 	resize();
}

function onTouchStart(event)
{
	isAdding = true;
	console.log("start")
}

function onTouchEnd(event)
{
	bunnyType++
	bunnyType %= 5;
// 	currentTexture = bunnyTextures[bunnyType];

	isAdding = false;
	console.log("end")
}

function update()
{
	stats.begin();
	if(isAdding)
	{
		// add 10 at a time :)
		
		if(count < 200000)
		{

			for (var i = 0; i < amount; i++) 
			{
// 				var bunny = new PIXI.Sprite(currentTexture);
				let bunny = c3.objects.bunny.createInstance(0, 0, 0);
				bunny.animationFrame = bunnyType
				bunny.speedX = Math.random() * 10;
				bunny.speedY = (Math.random() * 10) - 5;
// 				bunny.anchor.y = 1;
				//bunny.alpha = 0.3 + Math.random() * 0.7;
				bunnys.push(bunny);
// 				bunny.scale.set(0.5 + Math.random()*0.5);

// 				bunny.rotation = (Math.random()-0.5)
			
				//bunny.rotation = Math.random() - 0.5;
				var random = Math2.randomInt(0, count-2);
// 				container.addChild(bunny)//, random);
				
				count++;
			}
		}
	
		
		counter.innerHTML = count + " BUNNIES";
	}
	
	for (var i = 0; i < bunnys.length; i++) 
	{
		var bunny = bunnys[i];
		//bunny.rotation += 0.1
	
		bunny.x += bunny.speedX;
		bunny.y += bunny.speedY;
		bunny.speedY += gravity;
		
		if (bunny.x > maxX)
		{
			bunny.speedX *= -1;
			bunny.x = maxX;
		}
		else if (bunny.x < minX)
		{
			bunny.speedX *= -1;
			bunny.x = minX;
		}
		
		if (bunny.y > maxY)
		{
			bunny.speedY *= -0.85;
			bunny.y = maxY;
// 			bunny.spin = (Math.random()-0.5) * 0.2
			if (Math.random() > 0.5)
			{
				bunny.speedY -= Math.random() * 6;
			}
		} 
		else if (bunny.y < minY)
		{
			bunny.speedY = 0;
			bunny.y = minY;
		}
		
	}
	
// 	renderer.render(stage);
// 	requestAnimationFrame(update);
	stats.end();
}

// ---------------------------------------------------------------------------------------------

// stats.js - http://github.com/mrdoob/stats.js
var Stats = function() {
    var l = Date.now()
      , m = l
      , g = 0
      , n = Infinity
      , o = 0
      , h = 0
      , p = Infinity
      , q = 0
      , r = 0
      , s = 0
      , f = document.createElement("div");
    f.id = "stats";
    f.addEventListener("mousedown", function(b) {
        b.preventDefault();
        t(++s % 2)
    }, !1);
    f.style.cssText = "width:80px;opacity:0.9;cursor:pointer";
    var a = document.createElement("div");
    a.id = "fps";
    a.style.cssText = "padding:0 0 3px 3px;text-align:left;background-color:#002";
    f.appendChild(a);
    var i = document.createElement("div");
    i.id = "fpsText";
    i.style.cssText = "color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px";
    i.innerHTML = "FPS";
    a.appendChild(i);
    var c = document.createElement("div");
    c.id = "fpsGraph";
    c.style.cssText = "position:relative;width:74px;height:30px;background-color:#0ff";
    for (a.appendChild(c); 74 > c.children.length; ) {
        var j = document.createElement("span");
        j.style.cssText = "width:1px;height:30px;float:left;background-color:#113";
        c.appendChild(j)
    }
    var d = document.createElement("div");
    d.id = "ms";
    d.style.cssText = "padding:0 0 3px 3px;text-align:left;background-color:#020;display:none";
    f.appendChild(d);
    var k = document.createElement("div");
    k.id = "msText";
    k.style.cssText = "color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px";
    k.innerHTML = "MS";
    d.appendChild(k);
    var e = document.createElement("div");
    e.id = "msGraph";
    e.style.cssText = "position:relative;width:74px;height:30px;background-color:#0f0";
    for (d.appendChild(e); 74 > e.children.length; )
        j = document.createElement("span"),
        j.style.cssText = "width:1px;height:30px;float:left;background-color:#131",
        e.appendChild(j);
    var t = function(b) {
        s = b;
        switch (s) {
        case 0:
            a.style.display = "block";
            d.style.display = "none";
            break;
        case 1:
            a.style.display = "none",
            d.style.display = "block"
        }
    };
    return {
        REVISION: 11,
        domElement: f,
        setMode: t,
        begin: function() {
            l = Date.now()
        },
        end: function() {
            var b = Date.now();
            g = b - l;
            n = Math.min(n, g);
            o = Math.max(o, g);
            k.textContent = g + " MS (" + n + "-" + o + ")";
            var a = Math.min(30, 30 - 30 * (g / 200));
            e.appendChild(e.firstChild).style.height = a + "px";
            r++;
            b > m + 1E3 && (h = Math.round(1E3 * r / (b - m)),
            p = Math.min(p, h),
            q = Math.max(q, h),
            i.textContent = h + " FPS (" + p + "-" + q + ")",
            a = Math.min(30, 30 - 30 * (h / 100)),
            c.appendChild(c.firstChild).style.height = a + "px",
            m = b,
            r = 0);
            return b
        },
        update: function() {
            l = this.end()
        }
    }
};
