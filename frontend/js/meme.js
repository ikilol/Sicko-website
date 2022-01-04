

var boxes = gsap.timeline({
    scrollTrigger: {
      trigger: 'box02',
      start: "20% 20%",
      end: "top 400",
      scrub:0.3,
      pin:true,
      markers:true
    },
    defaults:{duration:1}
  })
  .to('.box02', {backgroundColor:'yellow'})
  .to('.box01', {backgroundColor:'yellow'})
  .to('.box03', {backgroundColor:'yellow'})
  .to({},{})

  
