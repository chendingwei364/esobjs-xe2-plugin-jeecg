export declare const uniformMapReadMe = "### \u9ED8\u8BA4\u4F7F\u7528\u7684UniformMap\n```\n{\n    \"myImage\": { \n        \"type\": \"image\", \n        \"uri\": \"${xe2-assets-script-dir}/xe2-assets/scene-manager/images/location.png\"\n    }\n}\n```\n\n### \u793A\u4F8B1\n```\n{\n    \"myImage\": { \n        \"type\": \"image\", \n        \"uri\": \"${xe2-assets-script-dir}/xe2-assets/scene-manager/images/location.png\"\n    },\n    \"ratio\": 0.5,\n}\n```\n\n### \u793A\u4F8B2\n```\n{\n    \"u_image\": {\n        \"type\": \"texture\",\n        \"id\": \"3010d3bd-cbf8-46cd-939f-c0b39b926255\"\n    },\n    \"ratio\": 0.5,\n}\n\n```\n\n### \u793A\u4F8B3\n```\n{\n    \"ratioAndStart\": [0.5, 0.7],\n}\n```\n\n### UniformMap\u7C7B\u578B\u89C4\u683C\n```\nexport type CzmCustomPrimitiveUniformType = number | [number, number] | [number, number, number] | [number, number, number, number] | { type: 'image', uri: string };\nexport type CzmCustomPrimitiveUniformMapType = { [k: string]: CzmCustomPrimitiveUniformType };\n```\n";
