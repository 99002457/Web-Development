var mobile=
[{
brand:'Samsung',
price:19500,
features: {
    ram:'4GB',
    camera:'64MP',
    screensize:'6 inch'
},
accessories: ['earphone','flipcase','charger']
},
{
    brand:'Mi Redmi 5',
    price:7000,
    features: {
        ram:'6GB',
        camera:'64MP',
        screensize:'6 inch'
    },
    accessories: ['earphone','flipcase','charger']
    },
    {
        brand:'Vivo',
        price:9500,
        features: {
            ram:'3GB',
            camera:'16MP',
            screensize:'5 inch'
        },
        accessories: ['earphone','flipcase','charger']
        }
]


mobile.forEach(mobile=>{
for (const prop in mobile)
{
  var mob=mobile[prop]

  if(mob instanceof Array)
  {
      for( const acs of mob)
      {
          console.log(acs);
      }
  }
  else if(typeof mob=='object')
  {
    for(const key in mob)
      {
          console.log(key+':'+mob[key]);
      }
  }
  else{
      console.log(prop+":"+mobile[prop])
  }

}
console.log()
});