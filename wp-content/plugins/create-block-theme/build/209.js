"use strict";(globalThis.webpackChunkcreate_block_theme=globalThis.webpackChunkcreate_block_theme||[]).push([[209],{9209:(t,e,s)=>{s.r(e),s.d(e,{kern:()=>n});var r=s(2592),i=s(7047);class n extends r.x{constructor(t,e){const{p:s}=super(t,e);this.version=s.uint16,this.nTables=s.uint16,(0,i.Z)(this,"tables",(()=>{let t=this.tableStart+4;const e=[];for(let r=0;r<this.nTables;r++){s.currentPosition=t;let r=new a(s);e.push(r),t+=r}return e}))}}class a{constructor(t){this.version=t.uint16,this.length=t.uint16,this.coverage=t.flags(8),this.format=t.uint8,0===this.format&&(this.nPairs=t.uint16,this.searchRange=t.uint16,this.entrySelector=t.uint16,this.rangeShift=t.uint16,(0,i.Z)(this,"pairs",(()=>[...new Array(this.nPairs)].map((e=>new h(t)))))),2===this.format&&console.warn("Kern subtable format 2 is not supported: this parser currently only parses universal table data.")}get horizontal(){return this.coverage[0]}get minimum(){return this.coverage[1]}get crossstream(){return this.coverage[2]}get override(){return this.coverage[3]}}class h{constructor(t){this.left=t.uint16,this.right=t.uint16,this.value=t.fword}}}}]);