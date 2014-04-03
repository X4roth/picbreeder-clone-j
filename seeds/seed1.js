module.exports = {
    "wid" : "0",
    "dbType" : "picArtifact",
    "parents" : [],
    "genome": {
        "wid" : "1",
        "dbType": "NEATGenotype",
        "parents" : [],
        "nodes" : [{
            "gid" : "0",
            "activationFunction" : "pbLinear",
            "nodeType" : "Bias",
            "layer" : 0,
            "step" : 0,
            "bias" : 0
        }, {
            "gid" : "1",
            "activationFunction" : "pbLinear",
            "nodeType" : "Input",
            "layer" : 0,
            "step" : 0,
            "bias" : 0
        }, {
            "gid" : "2",
            "activationFunction" : "pbLinear",
            "nodeType" : "Input",
            "layer" : 0,
            "step" : 0,
            "bias" : 0
        }, {
            "gid" : "3",
            "activationFunction" : "pbLinear",
            "nodeType" : "Input",
            "layer" : 0,
            "step" : 0,
            "bias" : 0
        }, {
            "gid" : "4",
            "activationFunction" : "Sine",
            "nodeType" : "Output",
            "layer" : 10,
            "step" : 0,
            "bias" : 0
        }, {
            "gid" : "5",
            "activationFunction" : "PBBipolarSigmoid",
            "nodeType" : "Output",
            "layer" : 10,
            "step" : 0,
            "bias" : 0
        }, {
            "gid" : "6",
            "activationFunction" : "Sine",
            "nodeType" : "Output",
            "layer" : 5,
            "step" : 0,
            "bias" : 0
        }
        ],
        "connections" : [{
            "gid" : "0",
            "weight" : -2.2932328903588797,
            "sourceID" : "2",
            "targetID" : "6"
        },   {
            "gid" : "6",
            "weight" : 1.7608415005951437,
            "sourceID" : "6",
            "targetID" : "4"
        }, {
            "gid" : "7",
            "weight" : -1.314796165604506,
            "sourceID" : "6",
            "targetID" : "5"
        },   {
            "gid" : "22",
            "weight" : -0.6256643214242532,
            "sourceID" : "3",
            "targetID" : "6"
        }
        ]
    },
    "meta": {"imageTitle": "seed1", "imageTags": ["simple", "scratch"]}
}