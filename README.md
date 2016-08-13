# Snap.js--EdgeLimit
Snap.js  Edge Limit  Addon Directive Directive 


# Snap.js Edge Limit

Snap.js Edge Limit Addon Directive is plugin for Angularjs-Snap.js Module 

# Usage -
The directive must be placed as follows to make it wokr. the directive has to be placed inside AngularSnap 
```sh
 <snap-dragger >
 
 </snap-dragger >


```

```sh
<snap-limit threshold="20" align="left" ></snap-limit> 

```



```sh
 <snap-dragger >
    <snap-limit threshold="20" align="left" ></snap-limit> 
 <snap-dragger >

```

Complete Example

```sh
<snap-drawer>
  // Drawer Content      
</snap-drawer>
<snap-content  snap-opt-disable="'right'" snap-opt-tap-to-close="true" >
     <snap-dragger >
      <snap-limit threshold="20" align="left" debug="true"></snap-limit> 
    </snap-dragger>
     <!-- ng Default View -->
    <div ng-view ></div> 
 </snap-content>

```





 - threshold : number of pixels either from right of left based on alignment. think of this as a box on either side
 - align : either left or right based on which side the 
  - debug : if true will create a red box on either side of edges for easy development
properly:
# Compatibility
compatible with both bootstrap and zurd foundation css framework
