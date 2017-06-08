<template>
	<div class='preloader'>
		<svg height='80' width='210'>
			<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
		</svg>
		<svg height='80' width='210'>
			<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
		</svg>
		<svg height='80' width='210'>
			<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
		</svg>
		<svg height='80' width='210'>
			<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
		</svg>
		<svg height='80' width='210'>
			<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
		</svg>
		<svg height='80' width='210'>
			<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
		</svg>
		<svg height='80' width='210'>
			<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
		</svg>
		<svg height='80' width='210'>
			<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
		</svg>
		<svg height='80' width='210'>
			<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
		</svg>
		<svg height='80' width='210'>
			<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
		</svg>
		<h5 v-text="pretitle"></h5>
	</div>
</template>
<script>
export default {
	props: ["pretitle"]
}
</script>
<style lang="sass">
$colors: #ffb60f, #ea4ea7, #d8002f, #42ace3, #a6bb00;
$left: 25px;
$count: 40px;
$timing: 600ms infinite ease-in-out;
$delay: 75ms;

@mixin jelly($num1, $num2) {
  stroke: nth($colors, $num1);
  cx: $left + ($count * $num2);
  stroke-width: 3px;
  animation: jump $timing;
  opacity: .7;
  animation-delay: $delay * $num2;
}

@mixin floor($num2) {
  fill: #333333;
  opacity: .05;
  rx: 0;
  ry: 0;
  cx: $left + ($count * $num2);
  cy: 48px;
  animation: shadow $timing;
  animation-delay: $delay * $num2;
}

.preloader {
  position: absolute;
  width: 210px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%) !important;
  h5 {
	 	color: #bcbcbd;
		line-height: 1;
		font-size: 25px;
		text-align: center;
		padding-top: 55px;
		opacity:0.65;
  }
}

svg {
  position: absolute;
  
  ellipse {
    transform-origin: center;
  }
    
  &:nth-of-type(1) ellipse {
    @include jelly(1, 0);
  }
  
  &:nth-of-type(2) ellipse {
    @include jelly(2, 1);
  }
  
  &:nth-of-type(3) ellipse {
    @include jelly(3, 2)
  }
  
  &:nth-of-type(4) ellipse {
    @include jelly(4, 3)
  }
  
  &:nth-of-type(5) ellipse {
    @include jelly(5, 4)
  }
  
  &:nth-of-type(6) ellipse {
    @include floor(0)
  }
  
  &:nth-of-type(7) ellipse {
   @include floor(1)
  }
  
  &:nth-of-type(8) ellipse {
    @include floor(2)
  }
  
  &:nth-of-type(9) ellipse {
    @include floor(3)
  }
  
  &:nth-of-type(10) ellipse {
    @include floor(4)
  }
}

$stroke-reg: 3px;
$dist: 10px;

@keyframes jump {
  40% {
    transform: translateY($dist * 2) scale(1.3);
    opacity: .9;
  }
  40% {
    rx: $dist;
    ry: $dist;
    stroke-width: $stroke-reg;
  }
  45% {
    rx: $dist + 5;
    ry: $dist - 3;
    stroke-width: $stroke-reg + 1;
  }
  55% {
    rx: $dist;
    ry: $dist;
  }
}

@keyframes shadow {
  45% {
    opacity: .15;
    rx: $dist;
    ry: $dist - 7;
    transform: translateY($dist - 5) scale(1.3);
  }
}
</style>