"use strict";(self.webpackChunk_guanghechen_blog=self.webpackChunk_guanghechen_blog||[]).push([[324],{19983:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var o=a(48734),n=a(23374),i=a(67294);function s(e){const t=r(e);return i.createElement(n.PostListPage,t)}const r=e=>{const{pageCurrent:t,pageTotal:a,pageSize:n,urlPrefix:s}=e.pageContext,{allMarkdownYozora:r,postItems:c}=e.data,g=i.useMemo((()=>r.nodes.map((e=>({title:e.title,description:e.description,slug:e.fields.slug,tags:e.tags,categories:e.categories,createdAt:e.createdAt,timeToRead:e.timeToRead,excerpt:e.excerptAst,ecmaImports:e.ecmaImports,definitionMap:e.definitionMap,footnoteDefinitionMap:e.footnoteDefinitionMap})))),[r]);return(0,o.NY)((()=>({urlPrefix:s,pagination:{current:t,size:n,totalPage:a},posts:g,postItems:c.nodes.map((e=>({title:e.title,createdAt:e.createdAt,tags:e.tags,slug:e.fields.slug})))})),[t,a,n,s,c,g])}}}]);