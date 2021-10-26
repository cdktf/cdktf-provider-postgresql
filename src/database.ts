// https://www.terraform.io/docs/providers/postgresql/r/database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * If false then no one can connect to this database
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/database.html#allow_connections Database#allow_connections}
  */
  readonly allowConnections?: boolean | cdktf.IResolvable;
  /**
  * How many concurrent connections can be made to this database
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/database.html#connection_limit Database#connection_limit}
  */
  readonly connectionLimit?: number;
  /**
  * Character set encoding to use in the new database
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/database.html#encoding Database#encoding}
  */
  readonly encoding?: string;
  /**
  * If true, then this database can be cloned by any user with CREATEDB privileges
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/database.html#is_template Database#is_template}
  */
  readonly isTemplate?: boolean | cdktf.IResolvable;
  /**
  * Collation order (LC_COLLATE) to use in the new database
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/database.html#lc_collate Database#lc_collate}
  */
  readonly lcCollate?: string;
  /**
  * Character classification (LC_CTYPE) to use in the new database
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/database.html#lc_ctype Database#lc_ctype}
  */
  readonly lcCtype?: string;
  /**
  * The PostgreSQL database name to connect to
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/database.html#name Database#name}
  */
  readonly name: string;
  /**
  * The ROLE which owns the database
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/database.html#owner Database#owner}
  */
  readonly owner?: string;
  /**
  * The name of the tablespace that will be associated with the new database
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/database.html#tablespace_name Database#tablespace_name}
  */
  readonly tablespaceName?: string;
  /**
  * The name of the template from which to create the new database
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/database.html#template Database#template}
  */
  readonly template?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/postgresql/r/database.html postgresql_database}
*/
export class Database extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "postgresql_database";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/postgresql/r/database.html postgresql_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'postgresql_database',
      terraformGeneratorMetadata: {
        providerName: 'postgresql'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowConnections = config.allowConnections;
    this._connectionLimit = config.connectionLimit;
    this._encoding = config.encoding;
    this._isTemplate = config.isTemplate;
    this._lcCollate = config.lcCollate;
    this._lcCtype = config.lcCtype;
    this._name = config.name;
    this._owner = config.owner;
    this._tablespaceName = config.tablespaceName;
    this._template = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_connections - computed: false, optional: true, required: false
  private _allowConnections?: boolean | cdktf.IResolvable | undefined; 
  public get allowConnections() {
    return this.getBooleanAttribute('allow_connections') as any;
  }
  public set allowConnections(value: boolean | cdktf.IResolvable | undefined) {
    this._allowConnections = value;
  }
  public resetAllowConnections() {
    this._allowConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowConnectionsInput() {
    return this._allowConnections
  }

  // connection_limit - computed: false, optional: true, required: false
  private _connectionLimit?: number | undefined; 
  public get connectionLimit() {
    return this.getNumberAttribute('connection_limit');
  }
  public set connectionLimit(value: number | undefined) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit
  }

  // encoding - computed: true, optional: true, required: false
  private _encoding?: string | undefined; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string | undefined) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_template - computed: true, optional: true, required: false
  private _isTemplate?: boolean | cdktf.IResolvable | undefined; 
  public get isTemplate() {
    return this.getBooleanAttribute('is_template') as any;
  }
  public set isTemplate(value: boolean | cdktf.IResolvable | undefined) {
    this._isTemplate = value;
  }
  public resetIsTemplate() {
    this._isTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTemplateInput() {
    return this._isTemplate
  }

  // lc_collate - computed: true, optional: true, required: false
  private _lcCollate?: string | undefined; 
  public get lcCollate() {
    return this.getStringAttribute('lc_collate');
  }
  public set lcCollate(value: string | undefined) {
    this._lcCollate = value;
  }
  public resetLcCollate() {
    this._lcCollate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcCollateInput() {
    return this._lcCollate
  }

  // lc_ctype - computed: true, optional: true, required: false
  private _lcCtype?: string | undefined; 
  public get lcCtype() {
    return this.getStringAttribute('lc_ctype');
  }
  public set lcCtype(value: string | undefined) {
    this._lcCtype = value;
  }
  public resetLcCtype() {
    this._lcCtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcCtypeInput() {
    return this._lcCtype
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

  // owner - computed: true, optional: true, required: false
  private _owner?: string | undefined; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string | undefined) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner
  }

  // tablespace_name - computed: true, optional: true, required: false
  private _tablespaceName?: string | undefined; 
  public get tablespaceName() {
    return this.getStringAttribute('tablespace_name');
  }
  public set tablespaceName(value: string | undefined) {
    this._tablespaceName = value;
  }
  public resetTablespaceName() {
    this._tablespaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablespaceNameInput() {
    return this._tablespaceName
  }

  // template - computed: true, optional: true, required: false
  private _template?: string | undefined; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string | undefined) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_connections: cdktf.booleanToTerraform(this._allowConnections),
      connection_limit: cdktf.numberToTerraform(this._connectionLimit),
      encoding: cdktf.stringToTerraform(this._encoding),
      is_template: cdktf.booleanToTerraform(this._isTemplate),
      lc_collate: cdktf.stringToTerraform(this._lcCollate),
      lc_ctype: cdktf.stringToTerraform(this._lcCtype),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      tablespace_name: cdktf.stringToTerraform(this._tablespaceName),
      template: cdktf.stringToTerraform(this._template),
    };
  }
}
