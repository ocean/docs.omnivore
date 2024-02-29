import{_ as t,c as l,a as e,b as a,t as r,d as o,o as n}from"./app.8e8bab01.js";const v=JSON.parse('{"title":"Search","description":"","frontmatter":{"title":"Search","editLink":true},"headers":[{"level":2,"title":"Searching for text","slug":"searching-for-text","link":"#searching-for-text","children":[]},{"level":2,"title":"Filtering by label","slug":"filtering-by-label","link":"#filtering-by-label","children":[]},{"level":2,"title":"Filtering by Archive Status","slug":"filtering-by-archive-status","link":"#filtering-by-archive-status","children":[]},{"level":2,"title":"Filtering by Item Type","slug":"filtering-by-item-type","link":"#filtering-by-item-type","children":[]},{"level":2,"title":"Filtering for deleted items","slug":"filtering-for-deleted-items","link":"#filtering-for-deleted-items","children":[]},{"level":2,"title":"Filtering by read state","slug":"filtering-by-read-state","link":"#filtering-by-read-state","children":[]},{"level":2,"title":"Filtering by read position","slug":"filtering-by-read-position","link":"#filtering-by-read-position","children":[]},{"level":2,"title":"Filtering by type","slug":"filtering-by-type","link":"#filtering-by-type","children":[]},{"level":2,"title":"Finding highlights","slug":"finding-highlights","link":"#finding-highlights","children":[]},{"level":2,"title":"Filtering by save/publish dates","slug":"filtering-by-save-publish-dates","link":"#filtering-by-save-publish-dates","children":[]},{"level":2,"title":"Filtering by language","slug":"filtering-by-language","link":"#filtering-by-language","children":[]},{"level":2,"title":"Sorting","slug":"sorting","link":"#sorting","children":[]}],"relativePath":"using/search.md","lastUpdated":1709173570000}'),s={name:"using/search.md"},d={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),c=o('<p>Omnivore uses search to filter items in your library. You can use a simple keyword search or our advanced search syntax to find items.</p><nav class="table-of-contents"><ul><li><a href="#searching-for-text">Searching for text</a></li><li><a href="#filtering-by-label">Filtering by label</a></li><li><a href="#filtering-by-archive-status">Filtering by Archive Status</a></li><li><a href="#filtering-by-item-type">Filtering by Item Type</a></li><li><a href="#filtering-for-deleted-items">Filtering for deleted items</a></li><li><a href="#filtering-by-read-state">Filtering by read state</a></li><li><a href="#filtering-by-read-position">Filtering by read position</a></li><li><a href="#filtering-by-type">Filtering by type</a></li><li><a href="#finding-highlights">Finding highlights</a></li><li><a href="#filtering-by-save-publish-dates">Filtering by save/publish dates</a></li><li><a href="#filtering-by-language">Filtering by language</a></li><li><a href="#sorting">Sorting</a></li></ul></nav><h2 id="searching-for-text" tabindex="-1">Searching for text <a class="header-anchor" href="#searching-for-text" aria-hidden="true">#</a></h2><p>Omnivore will perform full text search across library items&#39; content, title, description, and site. By default, we look at undeleted and unarchived items, you can change this behavior by using operands like <code>in:all</code>, <code>in:archive</code> or <code>in:trash</code>. You can search for specific terms by quoting your terms (i.e. wrapping them in quotes). By default all results that match your search will be returned in the order they were saved. To change your search to sort by relevance use the <code>sort:score</code> parameter.</p><h2 id="filtering-by-label" tabindex="-1">Filtering by label <a class="header-anchor" href="#filtering-by-label" aria-hidden="true">#</a></h2><p>You can filter your search based on labels using AND and OR clauses. You can also negate a label search to find pages that do not have a certain label. Labels are case sensitive.</p><p>Some examples:</p><ul><li><code>label:Newsletter</code>: Finds all pages that have the label <strong>Newsletter</strong></li><li><code>label:Cooking,Fitness</code>: Finds all pages with either the <strong>Cooking</strong> or <strong>Fitness</strong> labels</li><li><code>label:Newsletter label:Surfing</code>: Finds all pages with both the <strong>Newsletter</strong> and <strong>Surfing</strong> labels</li><li><code>label:Coding -label:News</code>: Finds all pages with the <strong>Coding</strong> label that do not have the <strong>News</strong> label</li><li><code>label:&quot;Send to Obsidian&quot;</code>: Finds all pages with the multi-word label <strong>Send to Obsidian</strong></li><li><code>no:label</code>: Finds all pages that have <strong>no</strong> labels assigned.</li></ul><h2 id="filtering-by-archive-status" tabindex="-1">Filtering by Archive Status <a class="header-anchor" href="#filtering-by-archive-status" aria-hidden="true">#</a></h2><p>The in: filter is used to filter search results by their archive status.</p><p>Available options:</p><ul><li><code>in:inbox</code> (the default selected option): Show unarchived items.</li><li><code>in:archive</code>: Show archived items.</li><li><code>in:all</code>: Show all items regardless of archive state.</li></ul><h2 id="filtering-by-item-type" tabindex="-1">Filtering by Item Type <a class="header-anchor" href="#filtering-by-item-type" aria-hidden="true">#</a></h2><p>The search supports filtering by the type of item.</p><p>Available options:</p><p><code>in:following</code>: Show feed and newsletter items<br><code>in:library</code>: Show non-feed items</p><h2 id="filtering-for-deleted-items" tabindex="-1">Filtering for deleted items <a class="header-anchor" href="#filtering-for-deleted-items" aria-hidden="true">#</a></h2><p>To find the items you have removed or deleted, you can use the « Deleted » built-in filter on the mobile app or search with the <code>in:trash</code> option on the web. Items older than 2 weeks in the trash will be permanently deleted (in the current implementation they are simply not visible anymore).</p><h2 id="filtering-by-read-state" tabindex="-1">Filtering by read state <a class="header-anchor" href="#filtering-by-read-state" aria-hidden="true">#</a></h2><p>The <code>is:</code> filter is used to filter search by read state. Note that in Omnivore &#39;read&#39; means fully read, not just opened.</p><p>The <code>is:</code> filter options are:</p><ul><li><code>is:read</code>: Show only items that are fully read</li><li><code>is:unread</code>: (the default selected option) Show unread items</li></ul><h2 id="filtering-by-read-position" tabindex="-1">Filtering by read position <a class="header-anchor" href="#filtering-by-read-position" aria-hidden="true">#</a></h2><p>The <code>readPosition:</code> filter can be used to filter your search results based on how much of an item you have read.</p><ul><li><code>readPosition:&gt;30</code>: Show items where you have <strong>read more than 30%</strong> of the total content.</li><li><code>readPosition:&lt;60</code>: Show items where you have <strong>read less than 60%</strong> of the total content.</li></ul><p>For example, <code>readPosition:&gt;30</code> will show articles where you have scrolled past 30% of the content. <code>readPosition:&lt;60</code> will show articles where you haven&#39;t reached 60% of the content yet.</p><h2 id="filtering-by-type" tabindex="-1">Filtering by type <a class="header-anchor" href="#filtering-by-type" aria-hidden="true">#</a></h2><p>The <code>type:</code> filter is used to filter search by type.</p><ul><li><code>type:article</code>: Show only articles</li><li><code>type:file</code>: Show only files</li><li><code>type:pdf</code>: Show only PDFs</li><li><code>type:highlights</code>: Show your highlights</li></ul><h2 id="finding-highlights" tabindex="-1">Finding highlights <a class="header-anchor" href="#finding-highlights" aria-hidden="true">#</a></h2><p>You can find your highlights by using the <code>type:highlights</code> filter or find saved items with highlights using the <code>has:highlights</code> filter.</p><h2 id="filtering-by-save-publish-dates" tabindex="-1">Filtering by save/publish dates <a class="header-anchor" href="#filtering-by-save-publish-dates" aria-hidden="true">#</a></h2><p>You can filter your searches based on the time they were saved or published using the <code>saved:</code> and <code>published:</code> filters. These filters take two dates to create a date range. The <code>*</code> wildcard will accept any date.</p><p>For Example:</p><ul><li><code>saved:2022-04-21.._</code>: All items saved since 2022-04-21</li><li><code>published:2020-01-01..2022-02-02</code>: All items published between 2020-01-01 and 2022-02-02</li><li><code>published:_..2020-01-01</code>: All items published before 2020-01-01</li></ul><h2 id="filtering-by-language" tabindex="-1">Filtering by language <a class="header-anchor" href="#filtering-by-language" aria-hidden="true">#</a></h2><p>You can filter your searches based on the language of the article using the <code>language:</code> filter.</p><p>For example:</p><ul><li><code>language:italian</code>: Displays only articles in Italian</li></ul><h2 id="sorting" tabindex="-1">Sorting <a class="header-anchor" href="#sorting" aria-hidden="true">#</a></h2><p>By default all search results in Omnivore are sorted by saved date. This puts the most recently saved items at the top of your library. You can use sort options to change the library order:</p><ul><li><code>sort:saved</code>: Sort by saved date</li><li><code>sort:updated</code>: Sort by time the item was updated, for example having a label or highlight added</li><li><code>sort:score</code>: Sort by query term relevance</li><li><code>sort:wordsCount</code>: Sort by reading time</li></ul><p>Additionally, you can change the sort order by apending either <code>-asc</code> or <code>-des</code> to the sort parameter to sort by ascending or descending order respectively:</p><ul><li><code>sort:saved-asc</code>: Sort by saved date in Ascending order (oldest to newest saved date)</li><li><code>sort:updated-des</code>: Sort by time the item was updated, in descending order (newest to oldest)</li></ul>',44);function g(i,u,b,f,y,p){return n(),l("div",null,[e("h1",d,[a(r(i.$frontmatter.title)+" ",1),h]),c])}const w=t(s,[["render",g]]);export{v as __pageData,w as default};
