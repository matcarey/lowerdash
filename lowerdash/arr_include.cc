#include <node.h>
#include <string>

using namespace v8;
using namespace std;

void IncludeMethod(const FunctionCallbackInfo<Value>& args) {
  if (args.Length() < 2) {
    args.GetReturnValue().Set(false);
  } else {
    if (args[0]->IsArray()) {
      Local<Array> arr = Local<Array>::Cast(args[0]);
      bool ans(false);
      for (int i = 0; i < int(arr->Length()); i++) {
        if (arr->Get(i) == args[1]) {
          ans = true;
        }
      }
      args.GetReturnValue().Set(ans);
    } else {
      String::Utf8Value inputStr(args[0]->ToString());
      String::Utf8Value compareStr(args[1]->ToString());
      string str = string(*inputStr);
      string comp = string(*compareStr);
      args.GetReturnValue().Set(str.find(comp) != string::npos);
    }
  }
}

void init(Handle<Object> exports) {
  NODE_SET_METHOD(exports, "include", IncludeMethod);
}

NODE_MODULE(addon, init)