// import { BaseApi } from "./../base/api.base";

class ItemsAPI{

    hostUrl;
    httpModule;

    init(hostUrl, httpModule){
        this.hostUrl = hostUrl;
        this.httpModule = httpModule;
    }

    getItem(itemId){
        try{
          let promise =  this.httpModule.get(this.hostUrl + '/items/' + itemId + '?denormalize=true&mode=undefined');
          return new Promise(function(resolve, reject){
              promise.then(response => JSON.parse(response.responseText));
          });

        }
        catch(e){
          //TODO:  send appropriate error
          return this.getItemLocal(itemId);
        }
    }


    postItem(itemJson){
        return this.httpModule.post(this.hostUrl + '/items', itemJson);
    }

    getItemLocal(itemId) {
        return new Promise(function (resolve, reject) {
            resolve(itemJson);
        })
    }

}

export default new ItemsAPI();

var itemJson = {
    "meta": {
      "tags": {
        "custom": []
      },
      "publishedBy": {},
      "source": {
        "paint-id": "leonardo-dev-2510"
      },
      "schemaVersion": "2.0",
      "title": "ye item delete mat karna",
      "description": ""
    },
    "widgetStyles": {
      "hAlign": "left",
      "vAlign": "top"
    },
    "templatePreferences": {
      "theme": {},
      "splitter": {
        "visible": true
      },
      "layout": "A"
    },
    "templateData": {
      "leonardoSpreadsheet": {
        "resource": "RE1",
        "preferences": {
          "contextMenu": {},
          "ribbon": {
            "visible": false,
            "collapsed": false,
            "type": "type1"
          },
          "sheetbar": {
            "visible": false,
            "allowInsertDelete": false,
            "allowRename": false
          },
          "formulabar": {
            "visible": false,
            "namebox": false,
            "expanded": false
          },
          "grid": {
            "displayMode": "tabular",
            "rowHeader": false,
            "colHeader": false,
            "displayRanges": {
              "sidZ29puaK": {
                "endCell": "Q4",
                "startCell": "A1"
              }
            },
            "showGridLines": true
          }
        }
      },
      "instructions": {
        "type": "leoHTML",
        "data": "<p><br></p>"
      }
    },
    "_id": "5d75e8a68be3d500144d4010",
    "orgId": "leonardo-dev",
    "revision": "1",
    "type": "question",
    "templateType": "gridOnly",
    "resources": {
      "RE1": {
        "type": "leonardoJSON",
        "leonardoJSON": {
          "data": {
            "activeSheet": "Sheet1",
            "defaults": {
              "columnWidth": 82,
              "rowHeight": 21,
              "cellStyle": {
                "wrap": false,
                "textAlign": "general",
                "verticalAlign": "bottom"
              },
              "cellFontAttrs": {
                "family": "Calibri",
                "size": 12,
                "color": "#000000",
                "bold": false,
                "italic": false,
                "underline": false
              }
            },
            "sheets": {
              "0": {
                "name": "Sheet1",
                "maxColIndexEdited": 16,
                "maxRowIndexEdited": 3,
                "selection": "C4:C4",
                "activeCell": "C4:C4",
                "frozenRows": 0,
                "frozenColumns": 0,
                "showGridLines": false,
                "defaults": {
                  "columnWidth": 82,
                  "rowHeight": 21,
                  "cellStyle": {
                    "wrap": false,
                    "textAlign": "general",
                    "verticalAlign": "bottom"
                  },
                  "cellFontAttrs": {
                    "family": "Calibri",
                    "size": 12,
                    "color": "#000000",
                    "bold": false,
                    "italic": false,
                    "underline": false
                  }
                },
                "columns": {
                  "0": {
                    "visible": true,
                    "width": 36,
                    "index": 0
                  },
                  "1": {
                    "visible": true,
                    "width": 186,
                    "index": 1
                  },
                  "3": {
                    "visible": true,
                    "width": 10,
                    "index": 3
                  },
                  "5": {
                    "visible": true,
                    "width": 18,
                    "index": 5
                  },
                  "7": {
                    "visible": true,
                    "width": 18,
                    "index": 7
                  },
                  "9": {
                    "visible": true,
                    "width": 10,
                    "index": 9
                  },
                  "11": {
                    "visible": true,
                    "width": 18,
                    "index": 11
                  },
                  "13": {
                    "visible": true,
                    "width": 13,
                    "index": 13
                  },
                  "15": {
                    "visible": true,
                    "width": 10,
                    "index": 15
                  }
                },
                "rows": {
                  "0": {
                    "index": 0,
                    "visible": true,
                    "height": 30,
                    "cells": {
                      "1": {
                        "ref": "B1",
                        "index": 1,
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)"
                        }
                      },
                      "2": {
                        "ref": "C1",
                        "index": 2,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "format": "General"
                        }
                      },
                      "3": {
                        "ref": "D1",
                        "index": 3,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "format": "General"
                        }
                      },
                      "4": {
                        "ref": "E1",
                        "index": 4,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "format": "General"
                        }
                      },
                      "5": {
                        "ref": "F1",
                        "index": 5,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "format": "General"
                        }
                      },
                      "6": {
                        "ref": "G1",
                        "index": 6,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "format": "General"
                        }
                      },
                      "7": {
                        "ref": "H1",
                        "index": 7,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "format": "General"
                        }
                      },
                      "8": {
                        "ref": "I1",
                        "index": 8,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "format": "General"
                        }
                      },
                      "9": {
                        "ref": "J1",
                        "index": 9,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "format": "General"
                        }
                      },
                      "10": {
                        "ref": "K1",
                        "index": 10,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "format": "General"
                        }
                      },
                      "11": {
                        "ref": "L1",
                        "index": 11,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "format": "General"
                        }
                      },
                      "12": {
                        "ref": "M1",
                        "value": "Retained Earnings",
                        "index": 12,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "General",
                          "border": {
                            "bottom": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        }
                      },
                      "13": {
                        "ref": "N1",
                        "index": 13,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "General",
                          "border": {
                            "bottom": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        }
                      },
                      "14": {
                        "ref": "O1",
                        "index": 14,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "General",
                          "border": {
                            "bottom": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        }
                      },
                      "15": {
                        "ref": "P1",
                        "index": 15,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "General",
                          "border": {
                            "bottom": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        }
                      },
                      "16": {
                        "ref": "Q1",
                        "index": 16,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "General",
                          "border": {
                            "bottom": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        }
                      }
                    }
                  },
                  "1": {
                    "index": 1,
                    "visible": true,
                    "height": 30,
                    "cells": {
                      "1": {
                        "ref": "B2",
                        "index": 1,
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)"
                        }
                      },
                      "2": {
                        "ref": "C2",
                        "value": "Assets",
                        "index": 2,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "General",
                          "border": {
                            "bottom": {
                              "clr": "#7f7f7f",
                              "type": "medium"
                            }
                          }
                        }
                      },
                      "3": {
                        "ref": "D2",
                        "index": 3,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "General",
                          "border": {
                            "bottom": {
                              "clr": "#7f7f7f",
                              "type": "medium"
                            }
                          }
                        }
                      },
                      "4": {
                        "ref": "E2",
                        "index": 4,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "General",
                          "border": {
                            "bottom": {
                              "clr": "#7f7f7f",
                              "type": "medium"
                            }
                          }
                        }
                      },
                      "5": {
                        "ref": "F2",
                        "value": "=",
                        "index": 5,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "General"
                        }
                      },
                      "6": {
                        "ref": "G2",
                        "value": "Liabilities",
                        "index": 6,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "General",
                          "border": {
                            "bottom": {
                              "clr": "#7f7f7f",
                              "type": "medium"
                            }
                          }
                        }
                      },
                      "7": {
                        "ref": "H2",
                        "value": "+",
                        "index": 7,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "General"
                        }
                      },
                      "8": {
                        "ref": "I2",
                        "value": "Stockholders' Equity",
                        "index": 8,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "General",
                          "border": {
                            "bottom": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        }
                      },
                      "9": {
                        "ref": "J2",
                        "index": 9,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "General",
                          "border": {
                            "bottom": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        }
                      },
                      "10": {
                        "ref": "K2",
                        "index": 10,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "General",
                          "border": {
                            "bottom": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        }
                      },
                      "11": {
                        "ref": "L2",
                        "index": 11,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "format": "General"
                        }
                      },
                      "12": {
                        "ref": "M2",
                        "value": "Revenue",
                        "index": 12,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "General",
                          "border": {
                            "bottom": {
                              "clr": "#7f7f7f",
                              "type": "medium"
                            }
                          }
                        }
                      },
                      "13": {
                        "ref": "N2",
                        "index": 13,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "General"
                        }
                      },
                      "14": {
                        "ref": "O2",
                        "value": "Expenses",
                        "index": 14,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "General",
                          "border": {
                            "bottom": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        }
                      },
                      "15": {
                        "ref": "P2",
                        "index": 15,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "General",
                          "border": {
                            "bottom": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        }
                      },
                      "16": {
                        "ref": "Q2",
                        "index": 16,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "General",
                          "border": {
                            "bottom": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        }
                      }
                    }
                  },
                  "2": {
                    "index": 2,
                    "visible": true,
                    "height": 54,
                    "cells": {
                      "1": {
                        "ref": "B3",
                        "index": 1,
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)"
                        }
                      },
                      "2": {
                        "ref": "C3",
                        "value": "Cash",
                        "index": 2,
                        "fontAttrs": {
                          "def": {
                            "size": 11
                          }
                        },
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)"
                        }
                      },
                      "3": {
                        "ref": "D3",
                        "index": 3,
                        "fontAttrs": {
                          "def": {
                            "size": 11
                          }
                        },
                        "style": {
                          "wrap": true,
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "border": {
                            "top": {
                              "clr": "#7f7f7f",
                              "type": "medium"
                            }
                          }
                        }
                      },
                      "4": {
                        "ref": "E3",
                        "value": "Accounts Receivable",
                        "index": 4,
                        "fontAttrs": {
                          "def": {
                            "size": 11
                          }
                        },
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)"
                        }
                      },
                      "5": {
                        "ref": "F3",
                        "value": "=",
                        "index": 5,
                        "fontAttrs": {
                          "def": {
                            "size": 11
                          }
                        },
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)"
                        }
                      },
                      "6": {
                        "ref": "G3",
                        "value": "Accounts Payable",
                        "index": 6,
                        "fontAttrs": {
                          "def": {
                            "size": 11
                          }
                        },
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)"
                        }
                      },
                      "7": {
                        "ref": "H3",
                        "value": "+",
                        "index": 7,
                        "fontAttrs": {
                          "def": {
                            "size": 11
                          }
                        },
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)"
                        }
                      },
                      "8": {
                        "ref": "I3",
                        "value": "Common \r\nStock",
                        "index": 8,
                        "fontAttrs": {
                          "def": {
                            "size": 11
                          }
                        },
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)"
                        }
                      },
                      "9": {
                        "ref": "J3",
                        "index": 9,
                        "fontAttrs": {
                          "def": {
                            "size": 11
                          }
                        },
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)"
                        }
                      },
                      "10": {
                        "ref": "K3",
                        "value": "Retained Earnings",
                        "index": 10,
                        "fontAttrs": {
                          "def": {
                            "size": 11
                          }
                        },
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "General"
                        }
                      },
                      "11": {
                        "ref": "L3",
                        "index": 11,
                        "fontAttrs": {
                          "def": {
                            "size": 11,
                            "bold": true
                          }
                        },
                        "style": {
                          "format": "General"
                        }
                      },
                      "12": {
                        "ref": "M3",
                        "value": "Fees Earned",
                        "index": 12,
                        "fontAttrs": {
                          "def": {
                            "size": 11
                          }
                        },
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)"
                        }
                      },
                      "13": {
                        "ref": "N3",
                        "index": 13,
                        "fontAttrs": {
                          "def": {
                            "size": 11
                          }
                        },
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)"
                        }
                      },
                      "14": {
                        "ref": "O3",
                        "value": "Rent Expense",
                        "index": 14,
                        "fontAttrs": {
                          "def": {
                            "size": 11
                          }
                        },
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)"
                        }
                      },
                      "15": {
                        "ref": "P3",
                        "index": 15,
                        "fontAttrs": {
                          "def": {
                            "size": 11
                          }
                        },
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)"
                        }
                      },
                      "16": {
                        "ref": "Q3",
                        "value": "Supplies Expense",
                        "index": 16,
                        "fontAttrs": {
                          "def": {
                            "size": 11
                          }
                        },
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)"
                        }
                      }
                    }
                  },
                  "3": {
                    "index": 3,
                    "visible": true,
                    "height": 30,
                    "cells": {
                      "0": {
                        "ref": "A4",
                        "value": "1.",
                        "index": 0,
                        "style": {
                          "textAlign": "right",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)"
                        }
                      },
                      "1": {
                        "ref": "B4",
                        "value": "Issue Stock for Cash, $4,000",
                        "index": 1,
                        "style": {
                          "textAlign": "left",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)"
                        }
                      },
                      "2": {
                        "ref": "C4",
                        "index": 2,
                        "style": {
                          "background": "#FEF1E6",
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "border": {
                            "bottom": {
                              "type": "thin"
                            },
                            "top": {
                              "type": "thin"
                            }
                          }
                        }
                      },
                      "3": {
                        "ref": "D4",
                        "index": 3,
                        "style": {
                          "wrap": true,
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)"
                        }
                      },
                      "4": {
                        "ref": "E4",
                        "index": 4,
                        "style": {
                          "background": "#FEF1E6",
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "border": {
                            "bottom": {
                              "type": "thin"
                            },
                            "top": {
                              "type": "thin"
                            }
                          }
                        }
                      },
                      "6": {
                        "ref": "G4",
                        "index": 6,
                        "style": {
                          "background": "#FEF1E6",
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "border": {
                            "bottom": {
                              "type": "thin"
                            },
                            "top": {
                              "type": "thin"
                            }
                          }
                        }
                      },
                      "7": {
                        "ref": "H4",
                        "index": 7,
                        "style": {
                          "format": "General"
                        }
                      },
                      "8": {
                        "ref": "I4",
                        "index": 8,
                        "style": {
                          "background": "#FEF1E6",
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "border": {
                            "bottom": {
                              "type": "thin"
                            },
                            "top": {
                              "type": "thin"
                            }
                          }
                        }
                      },
                      "9": {
                        "ref": "J4",
                        "index": 9,
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)"
                        }
                      },
                      "10": {
                        "ref": "K4",
                        "index": 10,
                        "style": {
                          "background": "#FEF1E6",
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "border": {
                            "bottom": {
                              "type": "thin"
                            },
                            "top": {
                              "type": "thin"
                            }
                          }
                        }
                      },
                      "11": {
                        "ref": "L4",
                        "index": 11,
                        "fontAttrs": {
                          "def": {
                            "bold": true
                          }
                        },
                        "style": {
                          "format": "General"
                        }
                      },
                      "12": {
                        "ref": "M4",
                        "index": 12,
                        "fontAttrs": {
                          "def": {
                            "color": "#008000"
                          }
                        },
                        "style": {
                          "background": "#FEF1E6",
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "border": {
                            "bottom": {
                              "type": "thin"
                            },
                            "top": {
                              "type": "thin"
                            }
                          }
                        }
                      },
                      "13": {
                        "ref": "N4",
                        "index": 13,
                        "fontAttrs": {
                          "def": {
                            "color": "#008000"
                          }
                        },
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)"
                        }
                      },
                      "14": {
                        "ref": "O4",
                        "index": 14,
                        "style": {
                          "background": "#FEF1E6",
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "border": {
                            "bottom": {
                              "type": "thin"
                            },
                            "top": {
                              "type": "thin"
                            }
                          }
                        }
                      },
                      "15": {
                        "ref": "P4",
                        "index": 15,
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "format": "#,##0 ;(#,##0)"
                        }
                      },
                      "16": {
                        "ref": "Q4",
                        "index": 16,
                        "fontAttrs": {
                          "def": {
                            "color": "#FF0000"
                          }
                        },
                        "style": {
                          "background": "#FEF1E6",
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "border": {
                            "bottom": {
                              "type": "thin"
                            },
                            "top": {
                              "type": "thin"
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "mergedCells": [
                  "B1:B3",
                  "C2:E2",
                  "I2:K2",
                  "O2:Q2",
                  "C1:K1",
                  "M1:Q1"
                ],
                "id": "sidZ29puaK"
              }
            }
          }
        }
      },
      "RE2": {
        "type": "leonardoJSON",
        "leonardoJSON": {
          "data": {
            "activeSheet": "Sheet1",
            "displayMode": null,
            "colHeader": true,
            "rowHeader": true,
            "defaults": {
              "rowHeight": 21,
              "columnWidth": 82
            },
            "sheets": {
              "0": {
                "name": "Sheet1",
                "id": "sidZ29puaK",
                "selection": "C4:C4",
                "activeCell": "C4",
                "frozenRows": 0,
                "frozenColumns": 0,
                "showGridLines": false,
                "rowCount": 4,
                "columnCount": 17,
                "mergedCells": [
                  "B1:B3",
                  "C2:E2",
                  "I2:K2",
                  "O2:Q2",
                  "C1:K1",
                  "M1:Q1"
                ],
                "defaults": {
                  "cellFontAttrs": {
                    "family": "Arial",
                    "size": "12"
                  }
                },
                "columns": {
                  "0": {
                    "visible": true,
                    "index": 0,
                    "width": 36
                  },
                  "1": {
                    "visible": true,
                    "index": 1,
                    "width": 186
                  },
                  "3": {
                    "visible": true,
                    "index": 3,
                    "width": 10
                  },
                  "5": {
                    "visible": true,
                    "index": 5,
                    "width": 18
                  },
                  "7": {
                    "visible": true,
                    "index": 7,
                    "width": 18
                  },
                  "9": {
                    "visible": true,
                    "index": 9,
                    "width": 10
                  },
                  "11": {
                    "visible": true,
                    "index": 11,
                    "width": 18
                  },
                  "13": {
                    "visible": true,
                    "index": 13,
                    "width": 13
                  },
                  "15": {
                    "visible": true,
                    "index": 15,
                    "width": 10
                  }
                },
                "rows": {
                  "0": {
                    "visible": true,
                    "cells": {
                      "1": {
                        "index": 1,
                        "ref": "B1",
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12
                          }
                        }
                      },
                      "2": {
                        "index": 2,
                        "ref": "C1",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "bottom"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "3": {
                        "index": 3,
                        "ref": "D1",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "bottom"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "4": {
                        "index": 4,
                        "ref": "E1",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "bottom"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "5": {
                        "index": 5,
                        "ref": "F1",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "bottom"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "6": {
                        "index": 6,
                        "ref": "G1",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "bottom"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "7": {
                        "index": 7,
                        "ref": "H1",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "bottom"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "8": {
                        "index": 8,
                        "ref": "I1",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "bottom"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "9": {
                        "index": 9,
                        "ref": "J1",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "bottom"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "10": {
                        "index": 10,
                        "ref": "K1",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "bottom"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "11": {
                        "index": 11,
                        "ref": "L1",
                        "style": {
                          "verticalAlign": "bottom"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "12": {
                        "value": "Retained Earnings",
                        "index": 12,
                        "ref": "M1",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "border": {
                            "bottom": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "13": {
                        "index": 13,
                        "ref": "N1",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "border": {
                            "bottom": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "14": {
                        "index": 14,
                        "ref": "O1",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "border": {
                            "bottom": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "15": {
                        "index": 15,
                        "ref": "P1",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "border": {
                            "bottom": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "16": {
                        "index": 16,
                        "ref": "Q1",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "border": {
                            "bottom": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      }
                    },
                    "index": 0,
                    "height": 30
                  },
                  "1": {
                    "visible": true,
                    "cells": {
                      "1": {
                        "index": 1,
                        "ref": "B2",
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12
                          }
                        }
                      },
                      "2": {
                        "value": "Assets",
                        "index": 2,
                        "ref": "C2",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "border": {
                            "bottom": {
                              "clr": "#7f7f7f",
                              "type": "medium"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "3": {
                        "index": 3,
                        "ref": "D2",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "border": {
                            "bottom": {
                              "clr": "#7f7f7f",
                              "type": "medium"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "4": {
                        "index": 4,
                        "ref": "E2",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "border": {
                            "bottom": {
                              "clr": "#7f7f7f",
                              "type": "medium"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "5": {
                        "value": "=",
                        "index": 5,
                        "ref": "F2",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "6": {
                        "value": "Liabilities",
                        "index": 6,
                        "ref": "G2",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "border": {
                            "bottom": {
                              "clr": "#7f7f7f",
                              "type": "medium"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "7": {
                        "value": "+",
                        "index": 7,
                        "ref": "H2",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "8": {
                        "value": "Stockholders' Equity",
                        "index": 8,
                        "ref": "I2",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "border": {
                            "bottom": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "9": {
                        "index": 9,
                        "ref": "J2",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "border": {
                            "bottom": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "10": {
                        "index": 10,
                        "ref": "K2",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "border": {
                            "bottom": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "11": {
                        "index": 11,
                        "ref": "L2",
                        "style": {
                          "verticalAlign": "bottom"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "12": {
                        "value": "Revenue",
                        "index": 12,
                        "ref": "M2",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "border": {
                            "top": {
                              "clr": "#808080",
                              "type": "medium"
                            },
                            "bottom": {
                              "clr": "#7f7f7f",
                              "type": "medium"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "13": {
                        "index": 13,
                        "ref": "N2",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "border": {
                            "top": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "14": {
                        "value": "Expenses",
                        "index": 14,
                        "ref": "O2",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "border": {
                            "top": {
                              "clr": "#808080",
                              "type": "medium"
                            },
                            "bottom": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "15": {
                        "index": 15,
                        "ref": "P2",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "border": {
                            "top": {
                              "clr": "#808080",
                              "type": "medium"
                            },
                            "bottom": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "16": {
                        "index": 16,
                        "ref": "Q2",
                        "style": {
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "border": {
                            "top": {
                              "clr": "#808080",
                              "type": "medium"
                            },
                            "bottom": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      }
                    },
                    "index": 1,
                    "height": 30
                  },
                  "2": {
                    "visible": true,
                    "cells": {
                      "1": {
                        "index": 1,
                        "ref": "B3",
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12
                          }
                        }
                      },
                      "2": {
                        "value": "Cash",
                        "index": 2,
                        "ref": "C3",
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center",
                          "border": {
                            "top": {
                              "clr": "#7f7f7f",
                              "type": "medium"
                            },
                            "bottom": {
                              "clr": "#000000",
                              "type": "thin"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 11
                          }
                        }
                      },
                      "3": {
                        "index": 3,
                        "ref": "D3",
                        "style": {
                          "wrap": true,
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center",
                          "border": {
                            "top": {
                              "clr": "#7f7f7f",
                              "type": "medium"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 11
                          }
                        }
                      },
                      "4": {
                        "value": "Accounts Receivable",
                        "index": 4,
                        "ref": "E3",
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center",
                          "border": {
                            "top": {
                              "clr": "#7f7f7f",
                              "type": "medium"
                            },
                            "bottom": {
                              "clr": "#000000",
                              "type": "thin"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 11
                          }
                        }
                      },
                      "5": {
                        "value": "=",
                        "index": 5,
                        "ref": "F3",
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 11
                          }
                        }
                      },
                      "6": {
                        "value": "Accounts Payable",
                        "index": 6,
                        "ref": "G3",
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center",
                          "border": {
                            "top": {
                              "clr": "#7f7f7f",
                              "type": "medium"
                            },
                            "bottom": {
                              "clr": "#000000",
                              "type": "thin"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 11
                          }
                        }
                      },
                      "7": {
                        "value": "+",
                        "index": 7,
                        "ref": "H3",
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 11
                          }
                        }
                      },
                      "8": {
                        "value": "Common \r\nStock",
                        "index": 8,
                        "ref": "I3",
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center",
                          "border": {
                            "top": {
                              "clr": "#808080",
                              "type": "medium"
                            },
                            "bottom": {
                              "clr": "#000000",
                              "type": "thin"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 11
                          }
                        }
                      },
                      "9": {
                        "index": 9,
                        "ref": "J3",
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center",
                          "border": {
                            "top": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 11
                          }
                        }
                      },
                      "10": {
                        "value": "Retained Earnings",
                        "index": 10,
                        "ref": "K3",
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "verticalAlign": "center",
                          "border": {
                            "top": {
                              "clr": "#808080",
                              "type": "medium"
                            },
                            "bottom": {
                              "clr": "#000000",
                              "type": "thin"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 11
                          }
                        }
                      },
                      "11": {
                        "index": 11,
                        "ref": "L3",
                        "style": {
                          "verticalAlign": "bottom"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 11,
                            "bold": true
                          }
                        }
                      },
                      "12": {
                        "value": "Fees Earned",
                        "index": 12,
                        "ref": "M3",
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center",
                          "border": {
                            "top": {
                              "clr": "#7f7f7f",
                              "type": "medium"
                            },
                            "bottom": {
                              "clr": "#000000",
                              "type": "thin"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 11
                          }
                        }
                      },
                      "13": {
                        "index": 13,
                        "ref": "N3",
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 11
                          }
                        }
                      },
                      "14": {
                        "value": "Rent Expense",
                        "index": 14,
                        "ref": "O3",
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center",
                          "border": {
                            "top": {
                              "clr": "#808080",
                              "type": "medium"
                            },
                            "bottom": {
                              "clr": "#000000",
                              "type": "thin"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 11
                          }
                        }
                      },
                      "15": {
                        "index": 15,
                        "ref": "P3",
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center",
                          "border": {
                            "top": {
                              "clr": "#808080",
                              "type": "medium"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 11
                          }
                        }
                      },
                      "16": {
                        "value": "Supplies Expense",
                        "index": 16,
                        "ref": "Q3",
                        "style": {
                          "wrap": true,
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center",
                          "border": {
                            "top": {
                              "clr": "#808080",
                              "type": "medium"
                            },
                            "bottom": {
                              "clr": "#000000",
                              "type": "thin"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 11
                          }
                        }
                      }
                    },
                    "index": 2,
                    "height": 54
                  },
                  "3": {
                    "visible": true,
                    "cells": {
                      "0": {
                        "value": "1.",
                        "index": 0,
                        "ref": "A4",
                        "style": {
                          "textAlign": "right",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12
                          }
                        }
                      },
                      "1": {
                        "value": "Issue Stock for Cash, $4,000",
                        "index": 1,
                        "ref": "B4",
                        "style": {
                          "textAlign": "left",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12
                          }
                        }
                      },
                      "2": {
                        "value": 4000,
                        "index": 2,
                        "ref": "C4",
                        "style": {
                          "background": "#fef1e6",
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center",
                          "border": {
                            "top": {
                              "clr": "#000000",
                              "type": "thin"
                            },
                            "bottom": {
                              "clr": "#000000",
                              "type": "thin"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12
                          }
                        },
                        "validations": [
                          {
                            "validate": "value",
                            "operator": "equals",
                            "extrainfo": {
                              "ignoreCase": true,
                              "trimWhitespace": true
                            },
                            "id": "R1.1"
                          }
                        ]
                      },
                      "3": {
                        "index": 3,
                        "ref": "D4",
                        "style": {
                          "wrap": true,
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12
                          }
                        }
                      },
                      "4": {
                        "index": 4,
                        "ref": "E4",
                        "style": {
                          "background": "#fef1e6",
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center",
                          "border": {
                            "top": {
                              "clr": "#000000",
                              "type": "thin"
                            },
                            "bottom": {
                              "clr": "#000000",
                              "type": "thin"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12
                          }
                        }
                      },
                      "6": {
                        "index": 6,
                        "ref": "G4",
                        "style": {
                          "background": "#fef1e6",
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "bottom",
                          "border": {
                            "top": {
                              "clr": "#000000",
                              "type": "thin"
                            },
                            "bottom": {
                              "clr": "#000000",
                              "type": "thin"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12
                          }
                        }
                      },
                      "7": {
                        "index": 7,
                        "ref": "H4",
                        "style": {
                          "verticalAlign": "bottom"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12
                          }
                        }
                      },
                      "8": {
                        "value": 4000,
                        "index": 8,
                        "ref": "I4",
                        "style": {
                          "background": "#fef1e6",
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center",
                          "border": {
                            "top": {
                              "clr": "#000000",
                              "type": "thin"
                            },
                            "bottom": {
                              "clr": "#000000",
                              "type": "thin"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12
                          }
                        },
                        "validations": [
                          {
                            "validate": "value",
                            "operator": "equals",
                            "extrainfo": {
                              "ignoreCase": true,
                              "trimWhitespace": true
                            },
                            "id": "R2.1"
                          }
                        ]
                      },
                      "9": {
                        "index": 9,
                        "ref": "J4",
                        "style": {
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12
                          }
                        }
                      },
                      "10": {
                        "index": 10,
                        "ref": "K4",
                        "style": {
                          "background": "#fef1e6",
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center",
                          "border": {
                            "top": {
                              "clr": "#000000",
                              "type": "thin"
                            },
                            "bottom": {
                              "clr": "#000000",
                              "type": "thin"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12
                          }
                        }
                      },
                      "11": {
                        "index": 11,
                        "ref": "L4",
                        "style": {
                          "verticalAlign": "bottom"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12,
                            "bold": true
                          }
                        }
                      },
                      "12": {
                        "index": 12,
                        "ref": "M4",
                        "style": {
                          "background": "#fef1e6",
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center",
                          "border": {
                            "top": {
                              "clr": "#000000",
                              "type": "thin"
                            },
                            "bottom": {
                              "clr": "#000000",
                              "type": "thin"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#008000",
                            "family": "Calibri",
                            "size": 12
                          }
                        }
                      },
                      "13": {
                        "index": 13,
                        "ref": "N4",
                        "style": {
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#008000",
                            "family": "Calibri",
                            "size": 12
                          }
                        }
                      },
                      "14": {
                        "index": 14,
                        "ref": "O4",
                        "style": {
                          "background": "#fef1e6",
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center",
                          "border": {
                            "top": {
                              "clr": "#000000",
                              "type": "thin"
                            },
                            "bottom": {
                              "clr": "#000000",
                              "type": "thin"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12
                          }
                        }
                      },
                      "15": {
                        "index": 15,
                        "ref": "P4",
                        "style": {
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "center"
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#000000",
                            "family": "Calibri",
                            "size": 12
                          }
                        }
                      },
                      "16": {
                        "index": 16,
                        "ref": "Q4",
                        "style": {
                          "background": "#fef1e6",
                          "textAlign": "center",
                          "format": "#,##0 ;(#,##0)",
                          "verticalAlign": "bottom",
                          "border": {
                            "top": {
                              "clr": "#000000",
                              "type": "thin"
                            },
                            "bottom": {
                              "clr": "#000000",
                              "type": "thin"
                            }
                          }
                        },
                        "fontAttrs": {
                          "def": {
                            "color": "#ff0000",
                            "family": "Calibri",
                            "size": 12
                          }
                        }
                      }
                    },
                    "index": 3,
                    "height": 30
                  }
                }
              }
            }
          }
        }
      }
    },
    "validation": {
      "validResponse": {
        "resource": "RE2"
      },
      "preferences": {},
      "rules": {
        "type": "Sum",
        "score": 100,
        "rules": [
          {
            "rules": [
              {
                "score": 50,
                "type": "Validation",
                "feedback": {
                  "successText": "Cell Text should be \"4,000\".",
                  "failureText": "Cell Text should be \"4,000\"."
                },
                "toleranceInfo": {
                  "ignoreCase": true,
                  "trimWhitespace": true
                },
                "id": "R1.1"
              }
            ],
            "score": 50,
            "type": "Sum",
            "id": "R1"
          },
          {
            "rules": [
              {
                "score": 50,
                "type": "Validation",
                "feedback": {
                  "successText": "Cell Text should be \"4,000\".",
                  "failureText": "Cell Text should be \"4,000\"."
                },
                "toleranceInfo": {
                  "ignoreCase": true,
                  "trimWhitespace": true
                },
                "id": "R2.1"
              }
            ],
            "score": 50,
            "type": "Sum",
            "id": "R2"
          }
        ]
      },
      "hints": {
        "meta": {
          "type": "cellLevel"
        },
        "data": {
          "H1": {
            "text": "This is hint 3",
            "type": "cellLevel",
            "linkedCells": [
              "sidZ29puaK~3~2"
            ],
            "fillCell": false,
            "penaltyScore": 1,
            "ruleId": "R1",
            "consumed": false
          },
          "H2": {
            "text": "This is hint 4",
            "type": "cellLevel",
            "linkedCells": [
              "sidZ29puaK~3~2"
            ],
            "fillCell": false,
            "penaltyScore": 1,
            "ruleId": "R1",
            "consumed": false
          },
          "H3": {
            "text": "This is hint 1",
            "type": "cellLevel",
            "linkedCells": [
              "sidZ29puaK~3~8"
            ],
            "fillCell": false,
            "penaltyScore": 1,
            "ruleId": "R2",
            "consumed": false
          },
          "H4": {
            "text": "This is hint 2",
            "type": "cellLevel",
            "linkedCells": [
              "sidZ29puaK~3~8"
            ],
            "fillCell": false,
            "penaltyScore": 1,
            "ruleId": "R2",
            "consumed": false
          }
        }
      }
    },
    "itemId": 2227,
    "leonardoId": "leo-leonardo-dev-2227",
    "__v": 0
  };
