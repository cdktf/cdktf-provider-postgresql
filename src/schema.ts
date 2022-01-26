// https://www.terraform.io/docs/providers/postgresql/r/schema
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * The database name to alter schema
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/schema#database Schema#database}
  */
  readonly database?: string;
  /**
  * When true, will also drop all the objects that are contained in the schema
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/schema#drop_cascade Schema#drop_cascade}
  */
  readonly dropCascade?: boolean | cdktf.IResolvable;
  /**
  * When true, use the existing schema if it exists
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/schema#if_not_exists Schema#if_not_exists}
  */
  readonly ifNotExists?: boolean | cdktf.IResolvable;
  /**
  * The name of the schema
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/schema#name Schema#name}
  */
  readonly name: string;
  /**
  * The ROLE name who owns the schema
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/schema#owner Schema#owner}
  */
  readonly owner?: string;
  /**
  * policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/schema#policy Schema#policy}
  */
  readonly policy?: SchemaPolicy[] | cdktf.IResolvable;
}
export interface SchemaPolicy {
  /**
  * If true, allow the specified ROLEs to CREATE new objects within the schema(s)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/schema#create Schema#create}
  */
  readonly create?: boolean | cdktf.IResolvable;
  /**
  * If true, allow the specified ROLEs to CREATE new objects within the schema(s) and GRANT the same CREATE privilege to different ROLEs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/schema#create_with_grant Schema#create_with_grant}
  */
  readonly createWithGrant?: boolean | cdktf.IResolvable;
  /**
  * ROLE who will receive this policy (default: PUBLIC)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/schema#role Schema#role}
  */
  readonly role?: string;
  /**
  * If true, allow the specified ROLEs to use objects within the schema(s)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/schema#usage Schema#usage}
  */
  readonly usage?: boolean | cdktf.IResolvable;
  /**
  * If true, allow the specified ROLEs to use objects within the schema(s) and GRANT the same USAGE privilege to different ROLEs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/schema#usage_with_grant Schema#usage_with_grant}
  */
  readonly usageWithGrant?: boolean | cdktf.IResolvable;
}

export function schemaPolicyToTerraform(struct?: SchemaPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.booleanToTerraform(struct!.create),
    create_with_grant: cdktf.booleanToTerraform(struct!.createWithGrant),
    role: cdktf.stringToTerraform(struct!.role),
    usage: cdktf.booleanToTerraform(struct!.usage),
    usage_with_grant: cdktf.booleanToTerraform(struct!.usageWithGrant),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/postgresql/r/schema postgresql_schema}
*/
export class Schema extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "postgresql_schema";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/postgresql/r/schema postgresql_schema} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'postgresql_schema',
      terraformGeneratorMetadata: {
        providerName: 'postgresql'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._database = config.database;
    this._dropCascade = config.dropCascade;
    this._ifNotExists = config.ifNotExists;
    this._name = config.name;
    this._owner = config.owner;
    this._policy = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  public get id() {
    return this.getStringAttribute('id');
  }

  // if_not_exists - computed: false, optional: true, required: false
  private _ifNotExists?: boolean | cdktf.IResolvable; 
  public get ifNotExists() {
    return this.getBooleanAttribute('if_not_exists');
  }
  public set ifNotExists(value: boolean | cdktf.IResolvable) {
    this._ifNotExists = value;
  }
  public resetIfNotExists() {
    this._ifNotExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNotExistsInput() {
    return this._ifNotExists;
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

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: SchemaPolicy[] | cdktf.IResolvable; 
  public get policy() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('policy')));
  }
  public set policy(value: SchemaPolicy[] | cdktf.IResolvable) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database: cdktf.stringToTerraform(this._database),
      drop_cascade: cdktf.booleanToTerraform(this._dropCascade),
      if_not_exists: cdktf.booleanToTerraform(this._ifNotExists),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      policy: cdktf.listMapper(schemaPolicyToTerraform)(this._policy),
    };
  }
}
