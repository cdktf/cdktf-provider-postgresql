/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/extension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * When true, will also create any extensions that this extension depends on that are not already installed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/extension#create_cascade Extension#create_cascade}
  */
  readonly createCascade?: boolean | cdktf.IResolvable;
  /**
  * Sets the database to add the extension to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/extension#database Extension#database}
  */
  readonly database?: string;
  /**
  * When true, will also drop all the objects that depend on the extension, and in turn all objects that depend on those objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/extension#drop_cascade Extension#drop_cascade}
  */
  readonly dropCascade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/extension#id Extension#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/extension#name Extension#name}
  */
  readonly name: string;
  /**
  * Sets the schema of an extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/extension#schema Extension#schema}
  */
  readonly schema?: string;
  /**
  * Sets the version number of the extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/extension#version Extension#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/extension postgresql_extension}
*/
export class Extension extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "postgresql_extension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Extension resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Extension to import
  * @param importFromId The id of the existing Extension that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/extension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Extension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "postgresql_extension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.25.0/docs/resources/extension postgresql_extension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtensionConfig
  */
  public constructor(scope: Construct, id: string, config: ExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'postgresql_extension',
      terraformGeneratorMetadata: {
        providerName: 'postgresql',
        providerVersion: '1.25.0',
        providerVersionConstraint: '~> 1.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createCascade = config.createCascade;
    this._database = config.database;
    this._dropCascade = config.dropCascade;
    this._id = config.id;
    this._name = config.name;
    this._schema = config.schema;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_cascade - computed: false, optional: true, required: false
  private _createCascade?: boolean | cdktf.IResolvable; 
  public get createCascade() {
    return this.getBooleanAttribute('create_cascade');
  }
  public set createCascade(value: boolean | cdktf.IResolvable) {
    this._createCascade = value;
  }
  public resetCreateCascade() {
    this._createCascade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createCascadeInput() {
    return this._createCascade;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // drop_cascade - computed: false, optional: true, required: false
  private _dropCascade?: boolean | cdktf.IResolvable; 
  public get dropCascade() {
    return this.getBooleanAttribute('drop_cascade');
  }
  public set dropCascade(value: boolean | cdktf.IResolvable) {
    this._dropCascade = value;
  }
  public resetDropCascade() {
    this._dropCascade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCascadeInput() {
    return this._dropCascade;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_cascade: cdktf.booleanToTerraform(this._createCascade),
      database: cdktf.stringToTerraform(this._database),
      drop_cascade: cdktf.booleanToTerraform(this._dropCascade),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      schema: cdktf.stringToTerraform(this._schema),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_cascade: {
        value: cdktf.booleanToHclTerraform(this._createCascade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_cascade: {
        value: cdktf.booleanToHclTerraform(this._dropCascade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
