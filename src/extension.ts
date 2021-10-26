// https://www.terraform.io/docs/providers/postgresql/r/extension.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * When true, will also create any extensions that this extension depends on that are not already installed
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/extension.html#create_cascade Extension#create_cascade}
  */
  readonly createCascade?: boolean | cdktf.IResolvable;
  /**
  * Sets the database to add the extension to
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/extension.html#database Extension#database}
  */
  readonly database?: string;
  /**
  * When true, will also drop all the objects that depend on the extension, and in turn all objects that depend on those objects
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/extension.html#drop_cascade Extension#drop_cascade}
  */
  readonly dropCascade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/extension.html#name Extension#name}
  */
  readonly name: string;
  /**
  * Sets the schema of an extension
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/extension.html#schema Extension#schema}
  */
  readonly schema?: string;
  /**
  * Sets the version number of the extension
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/extension.html#version Extension#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/postgresql/r/extension.html postgresql_extension}
*/
export class Extension extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "postgresql_extension";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/postgresql/r/extension.html postgresql_extension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtensionConfig
  */
  public constructor(scope: Construct, id: string, config: ExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'postgresql_extension',
      terraformGeneratorMetadata: {
        providerName: 'postgresql'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._createCascade = config.createCascade;
    this._database = config.database;
    this._dropCascade = config.dropCascade;
    this._name = config.name;
    this._schema = config.schema;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_cascade - computed: false, optional: true, required: false
  private _createCascade?: boolean | cdktf.IResolvable | undefined; 
  public get createCascade() {
    return this.getBooleanAttribute('create_cascade') as any;
  }
  public set createCascade(value: boolean | cdktf.IResolvable | undefined) {
    this._createCascade = value;
  }
  public resetCreateCascade() {
    this._createCascade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createCascadeInput() {
    return this._createCascade
  }

  // database - computed: true, optional: true, required: false
  private _database?: string | undefined; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string | undefined) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database
  }

  // drop_cascade - computed: false, optional: true, required: false
  private _dropCascade?: boolean | cdktf.IResolvable | undefined; 
  public get dropCascade() {
    return this.getBooleanAttribute('drop_cascade') as any;
  }
  public set dropCascade(value: boolean | cdktf.IResolvable | undefined) {
    this._dropCascade = value;
  }
  public resetDropCascade() {
    this._dropCascade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCascadeInput() {
    return this._dropCascade
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._name
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string | undefined; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string | undefined) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema
  }

  // version - computed: true, optional: true, required: false
  private _version?: string | undefined; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_cascade: cdktf.booleanToTerraform(this._createCascade),
      database: cdktf.stringToTerraform(this._database),
      drop_cascade: cdktf.booleanToTerraform(this._dropCascade),
      name: cdktf.stringToTerraform(this._name),
      schema: cdktf.stringToTerraform(this._schema),
      version: cdktf.stringToTerraform(this._version),
    };
  }
}
