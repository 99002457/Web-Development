var mobile=
{
brand:'Samsung',
price:19500,
features: {
    ram:'4GB',
    camera:'64MP',
    screensize:'6 inch'
},
accessories: ['earphone','flipcase','charger']
}

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
