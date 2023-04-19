# About code generation
What Golang code will generate by what Cadence code?

## Builtin types conversion
### Numbers
| `Cadence` | `Go`       |
|-----------|------------|
| `Int`     | `*big.Int` |
| `Int8`    | `int8`     |
| `Int16`   | `int16`    |
| `Int32`   | `int32`    |
| `Int64`   | `int64`    |
| `Int128`  | `*big.Int` |
| `Int256`  | `*big.Int` |
| `UInt`    | `*big.Int` |
| `UInt8`   | `uint8`    |
| `UInt16`  | `uint16`   |
| `UInt32`  | `uint32`   |
| `UInt64`  | `uint64`   |
| `UInt128` | `*big.Int` |
| `UInt256` | `*big.Int` |
| `Fix64`   | `int64`    |
| `UFix64`  | `uint64`   |

### Other
| `Cadence`     | `Go`     |
|---------------|----------|
| `String`      | `string` |
| `Character`   | `string` |
| `Address`     | `string` |
| `Path`        | `string` |
| `AnyStruct`   | `any`    |
| `AnyResource` | `any`    |
| `Bool`        | `bool`   |

### Map
Map types will convert based on detected types.  
Example(`String`):

| `Cadence`                           | `Go`                                      |
|-------------------------------------|-------------------------------------------|
| `{String:String}`                   | `map[string]string`                       |
| `{String:{String:String}}`          | `map[string]map[string]string`            |
| `{String:{String:{String:String}}}` | `map[string]map[string]map[string]string` |
| ...                                 | ...                                       |

### Array and Slice
Array and slice types will also convert based on detected types.  
Example(`String slices`):

| `Cadence`      | `Go`           |
|----------------|----------------|
| `[String]`     | `[]string`     |
| `[[String]]`   | `[][]string`   |
| `[[[String]]]` | `[][][]string` |
| ...            | ...            |

Example(`String arrays`):

| `Cadence`              | `Go`                |
|------------------------|---------------------|
| `[String:8]`           | `[8]string`         |
| `[[String:8]:16]`      | `[16][8]string`     |
| `[[[String:8]:16]:32]` | `[32][16][8]string` |
| ...                    | ...                 |

## `struct`
The structs in `Cadence` will be convert to `Golang` struct.
Example, from:
```cadence
pub struct AStruct {
  pub var fieldA: String
  pub var fieldB: Int64
  
  pub fun setFielA(_ a: String) {
    self.fieldA = a
  }

  init() {
    self.fieldA = ""
    self.fieldB = 0
  }
}
```
To:
```go
type AStruct struct {
  FieldA string `godence:"fieldA"`
  FieldB int64  `godence:"fieldB"`
}
```
In this example, `fieldA` in `Cadence` convert to `FieldA` in `Go`, because in `Go`, first letter of field name must be `UPPERCASE` or it cannot access from another package (More information in [spec](https://go.dev/ref/spec#Exported_identifiers)), and it has a tag with value `godence:"fieldA"`, this tag will used by `godence` to find origin field in `Cadence`.

::: info
TODO: Explain why methods of struct ignored during generation
:::

`godence` is a tool also developed by LemonNeko, it will used to do type conversion.

## `resource`
::: info
TODO: docs coming soon...
:::

## `event`
::: info
TODO: docs coming soon...
:::

## `enum`
::: warning
TODO: currently not support...
:::

## `contract`
::: info
TODO: docs coming soon...
:::
