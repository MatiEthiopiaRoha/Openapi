var express = require("express"),
  bodyParser = require("body-parser"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const options = {
  definition: {
    "openapi": "3.0.0",
    "info": {
      "title": "Ashewa Delivery",
      "contact": {},
      "version": "1.0"
    },
    "servers": [
      {
        "url": "http://example.com/v1",
        "variables": {}
      }
    ],
    "paths": {
      "/users": {
        "get": {
          "tags": [
            "Users"
          ],
          "summary": "Get All Users",
          "operationId": "GetAllUsers",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/auth/login": {
        "post": {
          "tags": [
            "Authentication"
          ],
          "summary": "Login",
          "operationId": "Login",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LoginRequest"
                },
                "example": {
                  "email": "admin@test.test",
                  "password": "{{password}}"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false
        }
      },
      "/auth/register": {
        "post": {
          "tags": [
            "Authentication"
          ],
          "summary": "Register",
          "operationId": "Register",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/RegisterRequest"
                },
                "example": {
                  "email": "delivery@test.test",
                  "password": "{{password}}",
                  "phone": "0911111113",
                  "role": "delivery"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false
        }
      },
      "/auth/refresh-token": {
        "post": {
          "tags": [
            "Authentication"
          ],
          "summary": "Refresh Token",
          "operationId": "RefreshToken",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/RefreshTokenRequest"
                },
                "example": {
                  "email": "admin@test.test",
                  "refreshToken": "62bb0943b6660b002fd20897.bdc9ebc0d3795dd632beb675e3c7fbfc877af1e7a3788e136c95010b6f8f47e529d060346a35acf7"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/": {
        "get": {
          "tags": [
            "Authentication"
          ],
          "summary": "Get User Profile",
          "operationId": "GetUserProfile",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false
        }
      },
      "/server/products": {
        "post": {
          "tags": [
            "Products"
          ],
          "summary": "Create a Product",
          "operationId": "CreateaProduct",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateaProductRequest"
                },
                "example": {
                  "productId": "123456789",
                  "vendor_id": "123456789",
                  "name": "test product",
                  "thumbnail": "test",
                  "category_name": "test category_name",
                  "category_id": "123456789",
                  "parent_category_id": "test parent_category",
                  "parent_category_name": "12345678",
                  "sub_category_name": "test sub_category_name",
                  "sub_category_id": "123456789"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false
        }
      },
      "/server/products/123456789": {
        "patch": {
          "tags": [
            "Products"
          ],
          "summary": "Update Products",
          "operationId": "UpdateProducts",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateProductsRequest"
                },
                "example": {
                  "name": "test product"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false
        },
        "delete": {
          "tags": [
            "Products"
          ],
          "summary": "Delete Product",
          "operationId": "DeleteProduct",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false
        }
      },
      "/products": {
        "get": {
          "tags": [
            "Products"
          ],
          "summary": "Get All Products1",
          "operationId": "GetAllProducts1",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        },
        "post": {
          "tags": [
            "Products"
          ],
          "summary": "Create a Product1",
          "operationId": "CreateaProduct1",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateaProductRequest"
                },
                "example": {
                  "productId": "123456789",
                  "vendor_id": "123456789",
                  "name": "test product",
                  "thumbnail": "test",
                  "category_name": "test category_name",
                  "category_id": "123456789",
                  "parent_category_id": "test parent_category",
                  "parent_category_name": "12345678",
                  "sub_category_name": "test sub_category_name",
                  "sub_category_id": "123456789"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/products/123456789": {
        "patch": {
          "tags": [
            "Products"
          ],
          "summary": "Update Products1",
          "operationId": "UpdateProducts1",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateProductsRequest"
                },
                "example": {
                  "name": "test product"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        },
        "delete": {
          "tags": [
            "Products"
          ],
          "summary": "Delete Product1",
          "operationId": "DeleteProduct1",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false
        }
      },
      "/server/vendors": {
        "get": {
          "tags": [
            "Vendors"
          ],
          "summary": "Get All Vendors",
          "operationId": "GetAllVendors",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false
        },
        "post": {
          "tags": [
            "Vendors"
          ],
          "summary": "Create a Vendor",
          "operationId": "CreateaVendor",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateaVendorRequest"
                },
                "example": {
                  "email": "test@test.test",
                  "phone": "0911111112",
                  "store_name": "test store",
                  "vendorId": "123456789",
                  "store_locations": [
                    "22 Town Square Mall"
                  ],
                  "userId": "123456789"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false
        }
      },
      "/server/vendors/123456789": {
        "patch": {
          "tags": [
            "Vendors"
          ],
          "summary": "Update Single Vendor",
          "operationId": "UpdateSingleVendor",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateSingleVendorRequest"
                },
                "example": {
                  "store_name": "test_store"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false
        }
      },
      "/vendors": {
        "get": {
          "tags": [
            "Vendors"
          ],
          "summary": "Get All Vendors1",
          "operationId": "GetAllVendors1",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        },
        "post": {
          "tags": [
            "Vendors"
          ],
          "summary": "Create a Vendor1",
          "operationId": "CreateaVendor1",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateaVendorRequest"
                },
                "example": {
                  "email": "test@test.test",
                  "phone": "0911111112",
                  "store_name": "test store",
                  "vendorId": "123456789",
                  "store_locations": [
                    "22 Town Square Mall"
                  ],
                  "userId": "123456789"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/vendors/123456789": {
        "patch": {
          "tags": [
            "Vendors"
          ],
          "summary": "Update Single Vendor1",
          "operationId": "UpdateSingleVendor1",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateSingleVendorRequest"
                },
                "example": {
                  "store_name": "test_store"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/server/customers": {
        "get": {
          "tags": [
            "Customers"
          ],
          "summary": "Get All Customers",
          "operationId": "GetAllCustomers",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false
        },
        "post": {
          "tags": [
            "Customers"
          ],
          "summary": "Create a new Customer",
          "operationId": "CreateanewCustomer",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateanewCustomerRequest"
                },
                "example": {
                  "email": "test@test.test",
                  "phone": "0911111112",
                  "customerId": "123456789",
                  "username": "test username",
                  "first_name": "first name test",
                  "last_name": "last name test",
                  "profile_pic": null
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false
        }
      },
      "/server/customers/123456789": {
        "patch": {
          "tags": [
            "Customers"
          ],
          "summary": "Update Single Customer",
          "operationId": "UpdateSingleCustomer",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateSingleCustomerRequest"
                },
                "example": {
                  "username": "test username"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false
        },
        "delete": {
          "tags": [
            "Customers"
          ],
          "summary": "Delete Customer",
          "operationId": "DeleteCustomer",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false
        }
      },
      "/customers": {
        "get": {
          "tags": [
            "Customers"
          ],
          "summary": "Get All Customers1",
          "operationId": "GetAllCustomers1",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        },
        "post": {
          "tags": [
            "Customers"
          ],
          "summary": "Create a new Customer1",
          "operationId": "CreateanewCustomer1",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateanewCustomerRequest1"
                },
                "example": {
                  "email": "test@test.test",
                  "phone": "0911111112",
                  "customerId": "123456789",
                  "username": "test username",
                  "first_name": "first name test",
                  "last_name": "last name test",
                  "profile_pic": "test"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/customers/123456789": {
        "patch": {
          "tags": [
            "Customers"
          ],
          "summary": "Update Single Vendor",
          "operationId": "PatchUpdateSingleVendor",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateSingleVendorRequest1"
                },
                "example": {
                  "username": "test username"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/customers/123456788": {
        "delete": {
          "tags": [
            "Customers"
          ],
          "summary": "Delete Customer1",
          "operationId": "DeleteCustomer1",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/server/orders": {
        "get": {
          "tags": [
            "Orders"
          ],
          "summary": "Get All Orders",
          "operationId": "GetAllOrders",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false
        }
      },
      "/orders": {
        "get": {
          "tags": [
            "Orders"
          ],
          "summary": "Get All Orders1",
          "operationId": "GetAllOrders1",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        },
        "post": {
          "tags": [
            "Orders"
          ],
          "summary": "Create a new Order1",
          "operationId": "CreateanewOrder1",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateanewOrderRequest"
                },
                "example": {
                  "order_id": "123456788",
                  "product_quantity": [
                    {
                      "product_id": "123456789",
                      "quantity": 2
                    }
                  ],
                  "customer_id": "123456789",
                  "totalPrice": 290,
                  "deliveryPrice": 10,
                  "deliveryDate": "same_day",
                  "deliveryLocation": "22 Town",
                  "reference_no": "6A7538Q",
                  "is_cash_on_delivery": false
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/orders/assign-deliverer/123456788": {
        "patch": {
          "tags": [
            "Orders"
          ],
          "summary": "Assign Deliverer",
          "operationId": "AssignDeliverer",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AssignDelivererRequest"
                },
                "example": {
                  "deliverer_id": "62bb247db6660b002fd20923"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/orders/accept-order/123456788": {
        "patch": {
          "tags": [
            "Orders"
          ],
          "summary": "Accept Order",
          "operationId": "AcceptOrder",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/orders/complete-order/123456788": {
        "patch": {
          "tags": [
            "Orders"
          ],
          "summary": "Complete Order",
          "operationId": "CompleteOrder",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/warehouses/62bb2818b6660b002fd20955": {
        "patch": {
          "tags": [
            "Warehouses"
          ],
          "summary": "Update Single Warehouse",
          "operationId": "UpdateSingleWarehouse",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateSingleWarehouseRequest"
                },
                "example": {
                  "store_name": "test_store"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        },
        "delete": {
          "tags": [
            "Warehouses"
          ],
          "summary": "Delete Warehouse",
          "operationId": "DeleteWarehouse",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/shelves/62bb323eb6660b002fd20968": {
        "patch": {
          "tags": [
            "Shelves"
          ],
          "summary": "Update Single Shelf",
          "operationId": "UpdateSingleShelf",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateSingleShelfRequest"
                },
                "example": {
                  "store_name": "test_store"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/shelves": {
        "post": {
          "tags": [
            "Shelves"
          ],
          "summary": "Create a Shelf",
          "operationId": "CreateaShelf",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateaShelfRequest"
                },
                "example": {
                  "warehouse_id": "62bb28a4b6660b002fd20962",
                  "shelf_name": "A10",
                  "shelf_column": [
                    1,
                    2
                  ],
                  "shelf_row": 4
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/shelves/62bb2818b6660b002fd20955": {
        "delete": {
          "tags": [
            "Shelves"
          ],
          "summary": "Delete a Shelf",
          "operationId": "DeleteaShelf",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/inventories": {
        "get": {
          "tags": [
            "Inventory Product"
          ],
          "summary": "Get all products in inventory",
          "operationId": "Getallproductsininventory",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        },
        "post": {
          "tags": [
            "Inventory Product"
          ],
          "summary": "add product to inventory",
          "operationId": "addproducttoinventory",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/addproducttoinventoryrequest"
                },
                "example": {
                  "productId": "123456789",
                  "stock_amount": 50,
                  "shelfId": "62bb323eb6660b002fd20968",
                  "productPosition": "test",
                  "added_by": "62bb0943b6660b002fd20897"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false
        }
      },
      "/inventories/62bb3599b6660b002fd20974": {
        "patch": {
          "tags": [
            "Inventory Product"
          ],
          "summary": "Update Product Inventory",
          "operationId": "UpdateProductInventory",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": [
            {
              "bearer": []
            }
          ]
        }
      }
    },
    "components": {
      "schemas": {
        "LoginRequest": {
          "title": "LoginRequest",
          "required": [
            "email",
            "password"
          ],
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            }
          },
          "example": {
            "email": "admin@test.test",
            "password": "{{password}}"
          }
        },
        "RegisterRequest": {
          "title": "RegisterRequest",
          "required": [
            "email",
            "password",
            "phone",
            "role"
          ],
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            },
            "phone": {
              "type": "string"
            },
            "role": {
              "type": "string"
            }
          },
          "example": {
            "email": "delivery@test.test",
            "password": "{{password}}",
            "phone": "0911111113",
            "role": "delivery"
          }
        },
        "RefreshTokenRequest": {
          "title": "RefreshTokenRequest",
          "required": [
            "email",
            "refreshToken"
          ],
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "refreshToken": {
              "type": "string"
            }
          },
          "example": {
            "email": "admin@test.test",
            "refreshToken": "62bb0943b6660b002fd20897.bdc9ebc0d3795dd632beb675e3c7fbfc877af1e7a3788e136c95010b6f8f47e529d060346a35acf7"
          }
        },
        "CreateaProductRequest": {
          "title": "CreateaProductRequest",
          "required": [
            "productId",
            "vendor_id",
            "name",
            "thumbnail",
            "category_name",
            "category_id",
            "parent_category_id",
            "parent_category_name",
            "sub_category_name",
            "sub_category_id"
          ],
          "type": "object",
          "properties": {
            "productId": {
              "type": "string"
            },
            "vendor_id": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "thumbnail": {
              "type": "string"
            },
            "category_name": {
              "type": "string"
            },
            "category_id": {
              "type": "string"
            },
            "parent_category_id": {
              "type": "string"
            },
            "parent_category_name": {
              "type": "string"
            },
            "sub_category_name": {
              "type": "string"
            },
            "sub_category_id": {
              "type": "string"
            }
          },
          "example": {
            "productId": "123456789",
            "vendor_id": "123456789",
            "name": "test product",
            "thumbnail": "test",
            "category_name": "test category_name",
            "category_id": "123456789",
            "parent_category_id": "test parent_category",
            "parent_category_name": "12345678",
            "sub_category_name": "test sub_category_name",
            "sub_category_id": "123456789"
          }
        },
        "UpdateProductsRequest": {
          "title": "UpdateProductsRequest",
          "required": [
            "name"
          ],
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            }
          },
          "example": {
            "name": "test product"
          }
        },
        "DeleteProductRequest": {
          "title": "DeleteProductRequest",
          "required": [
            "name"
          ],
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            }
          },
          "example": {
            "name": "test product"
          }
        },
        "UpdateSingleVendorRequest": {
          "title": "UpdateSingleVendorRequest",
          "required": [
            "store_name"
          ],
          "type": "object",
          "properties": {
            "store_name": {
              "type": "string"
            }
          },
          "example": {
            "store_name": "test_store"
          }
        },
        "CreateaVendorRequest": {
          "title": "CreateaVendorRequest",
          "required": [
            "email",
            "phone",
            "store_name",
            "vendorId",
            "store_locations",
            "userId"
          ],
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "phone": {
              "type": "string"
            },
            "store_name": {
              "type": "string"
            },
            "vendorId": {
              "type": "string"
            },
            "store_locations": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "description": ""
            },
            "userId": {
              "type": "string"
            }
          },
          "example": {
            "email": "test@test.test",
            "phone": "0911111112",
            "store_name": "test store",
            "vendorId": "123456789",
            "store_locations": [
              "22 Town Square Mall"
            ],
            "userId": "123456789"
          }
        },
        "DeleteVendorRequest": {
          "title": "DeleteVendorRequest",
          "required": [
            "name"
          ],
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            }
          },
          "example": {
            "name": "test product"
          }
        },
        "UpdateSingleCustomerRequest": {
          "title": "UpdateSingleCustomerRequest",
          "required": [
            "username"
          ],
          "type": "object",
          "properties": {
            "username": {
              "type": "string"
            }
          },
          "example": {
            "username": "test username"
          }
        },
        "CreateanewCustomerRequest": {
          "title": "CreateanewCustomerRequest",
          "required": [
            "email",
            "phone",
            "customerId",
            "username",
            "first_name",
            "last_name",
            "profile_pic"
          ],
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "phone": {
              "type": "string"
            },
            "customerId": {
              "type": "string"
            },
            "username": {
              "type": "string"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "profile_pic": {
              "type": "string",
              "nullable": true
            }
          },
          "example": {
            "email": "test@test.test",
            "phone": "0911111112",
            "customerId": "123456789",
            "username": "test username",
            "first_name": "first name test",
            "last_name": "last name test",
            "profile_pic": null
          }
        },
        "DeleteCustomerRequest": {
          "title": "DeleteCustomerRequest",
          "required": [
            "name"
          ],
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            }
          },
          "example": {
            "name": "test product"
          }
        },
        "CreateanewOrderRequest": {
          "title": "CreateanewOrderRequest",
          "required": [
            "order_id",
            "product_quantity",
            "customer_id",
            "totalPrice",
            "deliveryPrice",
            "deliveryDate",
            "deliveryLocation",
            "reference_no",
            "is_cash_on_delivery"
          ],
          "type": "object",
          "properties": {
            "order_id": {
              "type": "string"
            },
            "product_quantity": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ProductQuantity"
              },
              "description": ""
            },
            "customer_id": {
              "type": "string"
            },
            "totalPrice": {
              "type": "integer",
              "format": "int32"
            },
            "deliveryPrice": {
              "type": "integer",
              "format": "int32"
            },
            "deliveryDate": {
              "type": "string"
            },
            "deliveryLocation": {
              "type": "string"
            },
            "reference_no": {
              "type": "string"
            },
            "is_cash_on_delivery": {
              "type": "boolean"
            }
          },
          "example": {
            "order_id": "123456789",
            "product_quantity": [
              {
                "product_id": "123456789",
                "quantity": 2
              }
            ],
            "customer_id": "123456789",
            "totalPrice": 290,
            "deliveryPrice": 10,
            "deliveryDate": "same_day",
            "deliveryLocation": "",
            "reference_no": "6A7538Q",
            "is_cash_on_delivery": false
          }
        },
        "ProductQuantity": {
          "title": "ProductQuantity",
          "required": [
            "product_id",
            "quantity"
          ],
          "type": "object",
          "properties": {
            "product_id": {
              "type": "string"
            },
            "quantity": {
              "type": "integer",
              "format": "int32"
            }
          },
          "example": {
            "product_id": "123456789",
            "quantity": 2
          }
        },
        "UpdateSingleVendorRequest1": {
          "title": "UpdateSingleVendorRequest1",
          "required": [
            "username"
          ],
          "type": "object",
          "properties": {
            "username": {
              "type": "string"
            }
          },
          "example": {
            "username": "test username"
          }
        },
        "CreateanewCustomerRequest1": {
          "title": "CreateanewCustomerRequest1",
          "required": [
            "email",
            "phone",
            "customerId",
            "username",
            "first_name",
            "last_name",
            "profile_pic"
          ],
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "phone": {
              "type": "string"
            },
            "customerId": {
              "type": "string"
            },
            "username": {
              "type": "string"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "profile_pic": {
              "type": "string"
            }
          },
          "example": {
            "email": "test@test.test",
            "phone": "0911111112",
            "customerId": "123456789",
            "username": "test username",
            "first_name": "first name test",
            "last_name": "last name test",
            "profile_pic": "test"
          }
        },
        "UpdateSingleWarehouseRequest": {
          "title": "UpdateSingleWarehouseRequest",
          "required": [
            "store_name"
          ],
          "type": "object",
          "properties": {
            "store_name": {
              "type": "string"
            }
          },
          "example": {
            "store_name": "test_store"
          }
        },
        "CreateaWarehouseRequest": {
          "title": "CreateaWarehouseRequest",
          "required": [
            "email",
            "phone",
            "store_name",
            "vendorId",
            "store_locations",
            "userId"
          ],
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "phone": {
              "type": "string"
            },
            "store_name": {
              "type": "string"
            },
            "vendorId": {
              "type": "string"
            },
            "store_locations": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "description": ""
            },
            "userId": {
              "type": "string"
            }
          },
          "example": {
            "email": "test@test.test",
            "phone": "0911111112",
            "store_name": "test store",
            "vendorId": "123456789",
            "store_locations": [
              "22 Town Square Mall"
            ],
            "userId": "123456789"
          }
        },
        "UpdateSingleShelfRequest": {
          "title": "UpdateSingleShelfRequest",
          "required": [
            "store_name"
          ],
          "type": "object",
          "properties": {
            "store_name": {
              "type": "string"
            }
          },
          "example": {
            "store_name": "test_store"
          }
        },
        "CreateaShelfRequest": {
          "title": "CreateaShelfRequest",
          "required": [
            "warehouse_id",
            "shelf_name",
            "shelf_column",
            "shelf_row"
          ],
          "type": "object",
          "properties": {
            "warehouse_id": {
              "type": "string"
            },
            "shelf_name": {
              "type": "string"
            },
            "shelf_column": {
              "type": "array",
              "items": {
                "type": "integer",
                "format": "int32"
              },
              "description": ""
            },
            "shelf_row": {
              "type": "integer",
              "format": "int32"
            }
          },
          "example": {
            "warehouse_id": "62bb28a4b6660b002fd20962",
            "shelf_name": "A10",
            "shelf_column": [
              1,
              2
            ],
            "shelf_row": 4
          }
        },
        "AssignDelivererRequest": {
          "title": "AssignDelivererRequest",
          "required": [
            "deliverer_id"
          ],
          "type": "object",
          "properties": {
            "deliverer_id": {
              "type": "string"
            }
          },
          "example": {
            "deliverer_id": "62bb247db6660b002fd20923"
          }
        },
        "addproducttoinventoryrequest": {
          "title": "addproducttoinventoryrequest",
          "required": [
            "productId",
            "stock_amount",
            "shelfId",
            "productPosition",
            "added_by"
          ],
          "type": "object",
          "properties": {
            "productId": {
              "type": "string"
            },
            "stock_amount": {
              "type": "integer",
              "format": "int32"
            },
            "shelfId": {
              "type": "string"
            },
            "productPosition": {
              "type": "string"
            },
            "added_by": {
              "type": "string"
            }
          },
          "example": {
            "productId": "123456789",
            "stock_amount": 50,
            "shelfId": "62bb323eb6660b002fd20968",
            "productPosition": "test",
            "added_by": "62bb0943b6660b002fd20897"
          }
        }
      },
      "securitySchemes": {
        "bearer": {
          "type": "http",
          "scheme": "bearer"
        }
      }
    },
    "security": [],
    "tags": [
      {
        "name": "Users"
      },
      {
        "name": "Authentication"
      },
      {
        "name": "Products"
      },
      {
        "name": "Vendors"
      },
      {
        "name": "Customers"
      },
      {
        "name": "Orders"
      },
      {
        "name": "Warehouses"
      },
      {
        "name": "Shelves"
      },
      {
        "name": "Inventory Product"
      },
      {
        "name": "Misc",
        "description": ""
      }
    ]
  },
  apis: ["./test/"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})