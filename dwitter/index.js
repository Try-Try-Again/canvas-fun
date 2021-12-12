/*
u(t) is called 60 times per second.
t: elapsed time in seconds.
c: A 1920x1080 canvas.
x: A 2D context for that canvas.
S: Math.sin
C: Math.cos
T: Math.tan
R: Generates rgba-strings, ex.: R(255, 255, 255, 0.5)
*/

let t;

const app = document.getElementById('app');
const c = document.createElement('canvas');
const x = c.getContext('2d');
const S = Math.sin;
const C = Math.cos;
const T = Math.tan;
const R = (r, g, b, a) => a ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgba(${r}, ${g}, ${b})`;

const canvasConfig = {
	id: 'animation',
	width: '1920',
	height: '1080',
};

for (let key in canvasConfig) {
	c.setAttribute(key, canvasConfig[key]);
}

app.appendChild(c);


const animate = (u) => {
	const startTime = Date.now();
	return setInterval(
		() => {
			t = (Date.now() - startTime) / 1000;
			u(t);
		},
		16.33
	);
};

const presentAnimation = (animations) => {
	let index = 0;
	let animationInterval = animate(animations[index]);
	return setInterval(
		() => {
			clearInterval(animationInterval);
			c.width=1920;
			index = (index + 1) % animations.length;
			animationInterval = animate(animations[index]);
		},
		6000
	);
};

// dwitter examples
const sigveseb = (t) => {
	(F=Z=>{for(x.fillStyle=R(W=1/Z*4e3,W/2,W/4),i=Z*Z*2;n=i%Z,m=i/Z|0,i--;n%2^m%2&&x.fillRect((n-t%2-1)*W,(S(t)+m-1)*W,W,W));Z&&F(Z-6)})(36)//rm
};

const renaud__ = (t) => {
	l=c.width+=i=0;h=400;for(;++i<200;)for(j=a=(t+C(i))%2;j++<50;)x.fillRect(l*C(i*i)+~~a*(w=a*h-h)*C(j),(~~a?h:a*h)*(C(i)*C(i)+2)+w*S(j)/4,3,3)
};

const jczimm = (t) => {
	c.width=1920;
	for(i=0;i<300;i++)for(j=0;j<6;j++){x.fillRect(960+200*C(i)*S(T(t/1.1)+j/i),540+200*S(i),10,10)}
};

const new_core = (t) => {
	c.width=1920;for(i=16;i--;)x.ellipse(1e3+300*S(t+i*.1),500+50*C(t+i*.1),160*S(-i*.5)+160,50*S(i*.1)+5,1.6+.5*S(t*.5),9.5,0,6.3);x.stroke();
};

const iverjo = (t) => {
	c.width^=0;for(i=9;i<2e3;i+=2)s=3/(9.1-(t+i/99)%9),x.beginPath(),j=i*7+S(i*4+t+S(t)),x.lineWidth=s*s,x.arc(960,540,s*49,j,j+.6),x.stroke()
};

const nystrand = (t) => {
	for(i=w=3e3,a=b=g=333*T(t%9/7);j=(i^a*a)%4,i--;x.fillRect(a+=g+C(j*5+t)*g-a/2-w+g,b+=g+S(j*9+t)*g-b/2-w,s,s),w=2)x.fillStyle=R(s=w*9,w,s,.1)
};

presentAnimation([sigveseb, renaud__, jczimm, new_core, iverjo, nystrand]);
