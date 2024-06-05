export declare const vertexShaderSourceReadMe = "### \u9ED8\u8BA4\u9876\u70B9Shader\u793A\u4F8B\n```\nin vec3 position;\nin vec3 normal;\nin vec2 st;\nout vec3 v_normalEC;\nout vec2 v_st;\nvoid main()\n{\n    // \u5982\u679C\u8FD9\u4E00\u53E5\u6CE8\u91CA\uFF0C\u8981\u76F8\u5E94\u5730\u6CE8\u91CA\u6389attribute\u4E2D\u7684normal\uFF0C\u4E5F\u5C31\u662F\u8BF4\u9876\u70B9\u5C5E\u6027\u8981\u548Cshader\u4E2D\u7684\u4E00\u4E00\u5339\u914D\uFF01\n    v_normalEC = czm_normal * normal; \n    v_st = st;\n    gl_Position = czm_modelViewProjection * vec4(position, 1.0);\n}\n```\n\n### \u76F8\u5BF9\u5B8C\u6574\u7684\u9876\u70B9Shader\n```\n// vtxf \u4F7F\u7528double\u7C7B\u578B\u7684position\u8FDB\u884C\u8BA1\u7B97\n// in vec3 position3DHigh;\n// in vec3 position3DLow;\nin vec3 position;\nin vec3 normal;\nin vec2 st;\nin float batchId;\nout vec3 v_positionEC;\nout vec3 v_normalEC;\nout vec2 v_st;\nvoid main()\n{\n    // vtxf \u4F7F\u7528double\u7C7B\u578B\u7684position\u8FDB\u884C\u8BA1\u7B97\n    // vec4 p = czm_translateRelativeToEye(position3DHigh, position3DLow);\n    // v_positionEC = (czm_modelViewRelativeToEye * p).xyz;      // position in eye coordinates\n    // v_normalEC = czm_normal * normal;                         // normal in eye coordinates\n    // v_st = st;\n    // gl_Position = czm_modelViewProjectionRelativeToEye * p;\n    v_positionEC = (czm_modelView * vec4(position, 1.0)).xyz;       // position in eye coordinates\n    v_normalEC = czm_normal * normal;                               // normal in eye coordinates\n    v_st = st;\n    gl_Position = czm_modelViewProjection * vec4(position, 1.0);\n}\n```\n";
export declare const fragmentShaderSourceReadMe = "### \u9ED8\u8BA4\u7247\u5143Shader\u793A\u4F8B\n```\nin vec2 v_st;\nuniform sampler2D u_image;\nuniform vec4 u_color;\nvoid main()\n{\n    vec4 imageColor = texture(u_image, v_st);\n    out_FragColor = imageColor * u_color;\n}\n```\n\n### xe2VisibleAlpha\u4F7F\u7528\u793A\u4F8B\nxe2VisibleAlpha\u662F\u6839\u636E\u89C6\u8DDD\u8303\u56F4\u81EA\u52A8\u8BA1\u7B97\u51FA\u6765\u7684alpha\u503C\uFF0C\u7528\u6765\u8BBE\u7F6E\u900F\u660E\uFF0C\u4EA7\u751F\u6E10\u663E\u7684\u6548\u679C\u3002\n``` \nin vec2 v_st;\nuniform sampler2D u_image;\nuniform vec4 u_color;\nuniform float u_xe2VisibleAlpha;\nvoid main()\n{\n    vec4 imageColor = texture(u_image, v_st);\n    out_FragColor = imageColor * u_color * vec4(1., 1., 1., u_xe2VisibleAlpha);\n}\n```\n\n### \u76F8\u5BF9\u5B8C\u6574\u7684\u7247\u5143Shader\u793A\u4F8B\n```\nin vec3 v_positionEC;\nin vec3 v_normalEC;\nin vec2 v_st;\nuniform sampler2D myImage;\nvoid main()\n{\n    vec3 positionToEyeEC = -v_positionEC;\n    vec3 normalEC = normalize(v_normalEC);\n#ifdef FACE_FORWARD\n    normalEC = faceforward(normalEC, vec3(0.0, 0.0, 1.0), -normalEC);\n#endif\n    czm_materialInput materialInput;\n    materialInput.normalEC = normalEC;\n    materialInput.positionToEyeEC = positionToEyeEC;\n    materialInput.st = v_st;\n    //czm_material material = czm_getMaterial(materialInput);\n    czm_material material = czm_getDefaultMaterial(materialInput);\n    vec4 imageColor = texture(myImage, materialInput.st);\n    material.diffuse = imageColor.rgb;\n    material.alpha = imageColor.a;\n// #ifdef FLAT\n    out_FragColor = vec4(material.diffuse + material.emission, material.alpha);\n// #else\n    // out_FragColor = czm_phong(normalize(positionToEyeEC), material, czm_lightDirectionEC);\n// #endif\n}\n```\n";