// https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/physical_replication_slot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PhysicalReplicationSlotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/physical_replication_slot#id PhysicalReplicationSlot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/physical_replication_slot#name PhysicalReplicationSlot#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/physical_replication_slot postgresql_physical_replication_slot}
*/
export class PhysicalReplicationSlot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "postgresql_physical_replication_slot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PhysicalReplicationSlot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PhysicalReplicationSlot to import
  * @param importFromId The id of the existing PhysicalReplicationSlot that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/physical_replication_slot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PhysicalReplicationSlot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "postgresql_physical_replication_slot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.24.0/docs/resources/physical_replication_slot postgresql_physical_replication_slot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PhysicalReplicationSlotConfig
  */
  public constructor(scope: Construct, id: string, config: PhysicalReplicationSlotConfig) {
    super(scope, id, {
      terraformResourceType: 'postgresql_physical_replication_slot',
      terraformGeneratorMetadata: {
        providerName: 'postgresql',
        providerVersion: '1.24.0',
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
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
