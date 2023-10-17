           <View style={{ padding: 10 }} >
                    <View style={styles.contanier}>




                      <View>

                        <View>

                          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, alignItems: 'center', padding: 10, width: '100%' }}>

                            <View style={{ flexDirection: 'row', width: '50%',alignItems:'center',gap:5 }}>
                              <Text style={{ color: colors.orange, fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>{organizationName} {
                                owner&&owner.owner_name!==undefined&&(
                                  <Text style={{ color: colors.orange, fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>{owner ? '(' + owner.owner_name + ')' : ''}</Text>

                                )
                              }</Text>


                            </View>
                            {/* <TouchableOpacity style={{ width: '30%', justifyContent: 'center' }}
                              onPress={() => setForm(true)}

                            >

                              <Icon name="eye"
                                size={20}
                              />
                            </TouchableOpacity> */}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '40%' }}>

                              <TouchableOpacity onPress={handleEmailPress}>
                                <View style={{ backgroundColor: '#EDC91C', height: 30, width: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 99 }}>

                                  <Icon name="envelope" size={20}
                                    color="white"
                                  />

                                </View>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={handleCallPress}>
                                <View style={{ backgroundColor: '#007FFF', height: 30, width: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 99 }}>
                                  <Icon name="phone"
                                    size={10}
                                    color='white'
                                  />
                                </View>
                              </TouchableOpacity>
                              <TouchableOpacity
                              // onPress={handleWhatsPress}
                              >
                                <View style={{ backgroundColor: 'green', height: 30, width: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 99 }}>
                                  <Icon name="whatsapp"
                                    color='white'
                                    size={20}
                                  />
                                </View>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={handleCallPress}>
                                <View style={{ backgroundColor: '#FF3333', height: 30, width: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 99 }}>
                                  <Icon name="globe"
                                    size={20}
                                    color='white'
                                  />
                                </View>
                              </TouchableOpacity>


                            </View>
                          </View>

                          <View style={{ padding: 10 }}>

                            <View style={{ marginBottom: 10 }}>
                              <Text style={{ color: 'green', fontWeight: 'bold' }}>{organization.organization_type}</Text>
                            </View>
                            <View>


                              <View style={{ marginBottom: 5, flexDirection: 'row' }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>
                                  Address:
                                </Text>
                                <Text style={{ marginHorizontal: 15, flexWrap: 'wrap' }}>{organization.address}, {organization.city}, {organization.district}, {organization.pincode}</Text>

                              </View>
                              <View style={{ backgroundColor: "grey", height: 1 }}>
                                <Text></Text>
                              </View>
                            </View>
                            {/* <TouchableOpacity onPress={handleCallPress}>
                                <View style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 99 }}>
                                  <Icon name="phone"
                                    size={20}
                                    color='white'
                                  />
                                  <Text>{owner.contact}</Text>
                                </View>
                              </TouchableOpacity> */}
                          </View>
                          <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: 15 }}>

                            <TouchableOpacity style={{ width: '30%' }}
                              onPress={() => setView(true)}
                            >
                              <View style={{ backgroundColor: 'black', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>

                                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
                                  {selectedOption ? selectedOption : 'Assign Lead'}
                                </Text>
                              </View>
                            </TouchableOpacity>{
                              <Modal transparent={true}
                                visible={view}
                              >
                                <View style={{ backgroundColor: 'rgba(0,0,0,0.1)', justifyContent: 'center', flex: 1, padding: 10, paddingVertical: 15 }}>
                                  <View style={{ backgroundColor: 'white', zIndex: 10, elevation: 5, paddingVertical: 15, borderRadius: 15 }}>

                                    <TouchableOpacity
                                      onPress={handlePress}
                                    >

                                      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                                        <Text style={{ color: 'black', marginHorizontal: 5 }}>
                                          {selectedOption ? selectedOption : 'Assign Person'}
                                        </Text>
                                        <Icon
                                          name={isDropdownOpen ? 'caret-up' : 'caret-down'}
                                          size={20}
                                        />
                                      </View>
                                    </TouchableOpacity>
                                    {isDropdownOpen && (
                                      <View
                                        style={{
                                          marginTop: 10,
                                          backgroundColor: 'white',
                                          borderRadius: 10,
                                          elevation: 3,
                                          padding: 1,

                                        }}
                                      >
                                        <ScrollView>

                                        {userData.map((option, index) => (
                                          ["Admin", "Sale", "Superadmin"].includes(option.role) && (
                                            <TouchableOpacity
                                              key={index}
                                              onPress={() => handleOptionSelect(option.name)}
                                              style={{ paddingVertical: 5 }}
                                            >
                                              <Text style>
                                                {option.name}
                                              </Text>
                                            </TouchableOpacity>
                                          )
                                        ))}
                                        </ScrollView>


                                      </View>
                                    )}
                                    <TouchableOpacity onPress={() => setView(false)}>
                                      <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                                        <View style={{ backgroundColor: 'white', zIndex: 9, elevation: 5, width: '30%', borderRadius: 10 }}>
                                          <Text style={{ color: 'orange', textAlign: 'center', fontWeight: 'bold' }}>Cancel</Text>
                                        </View>

                                      </View>
                                    </TouchableOpacity>
                                  </View>
                                </View>

                              </Modal>
                            }
                            <TouchableOpacity style={{ width: '30%' }} onPress={() => setSelectView(true)}>
                              <View style={{ backgroundColor: 'orange', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>

                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Lead History</Text>
                              </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: '30%' }}
                              onPress={() => setMFrom(true)}
                            >
                              <View style={{ backgroundColor: '#1AD9FF', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>

                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Meeting</Text>
                              </View>
                            </TouchableOpacity>{
                              <Modal transparent={true}
                                visible={mFrom}
                              >
                                <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.1)', padding: 10 }}>
                                  <View style={{ backgroundColor: 'white', padding: 10, paddingVertical: 30, borderRadius: 10 }}>
                                    <View>
                                      <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', marginBottom: 10, fontSize: 30 }}>Meeting</Text>
                                    </View>
                                    <View style={{ width: '100%', gap: 10 }}>
                                      <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                                        <Text style={{ width: '30%', color: 'black' }}>Date & Time:</Text>
                                        <TextInput style={{ borderColor: 'black', borderWidth: .8, width: "70%", borderRadius: 10 }}

                                          value={state.date}
                                          onChangeText={(text) => setState((prev) => ({ ...prev, date: text }))}
                                        />
                                      </View>
                                      < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                                        <Text style={{ width: '30%', color: 'black' }}>Remark:</Text>
                                        <TextInput style={{ borderColor: 'black', borderWidth: .8, width: "70%", borderRadius: 10 }}
                                          value={state.remark}
                                          onChangeText={(text) => setState((prev) => ({ ...prev, remark: text }))}
                                        />
                                      </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 18 }}>
                                      <TouchableOpacity onPress={handleSubmit} style={{ width: '48%' }}>
                                        <View style={{ backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 20 }}>
                                          <Text style={{ color: 'white', fontWeight: "bold" }}>Submit</Text>
                                        </View>
                                      </TouchableOpacity>
                                      <TouchableOpacity onPress={() => setMFrom(false)} style={{ width: '48%' }}>
                                        <View style={{ backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 20 }}>
                                          <Text style={{ color: 'white', fontWeight: "bold" }}>Cancel</Text>
                                        </View>
                                      </TouchableOpacity>

                                    </View>


                                  </View>

                                </View>
                              </Modal>
                            }
                          </View>
                          <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: 15 }}>

                            <TouchableOpacity style={{ width: '30%' }}
                              onPress={viewDetail}
                            >
                              <View style={{ backgroundColor: '#1AD9FF', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>

                                <Text style={{ color: 'white', fontWeight: 'bold' }}>View Detail</Text>
                              </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '30%' }}
                              onPress={() => setFollForm(true)}

                            >
                              <View style={{ backgroundColor: '#FF0000', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>

                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Follow-Up</Text>
                              </View>
                            </TouchableOpacity>{
                              <Modal
                                transparent={true}
                                visible={follForm}
                              >
                                <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.1)', padding: 10 }}>
                                  <View style={{ backgroundColor: 'white', padding: 10, paddingVertical: 30, borderRadius: 10 }}>
                                    <View>
                                      <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', marginBottom: 10, fontSize: 30 }}>Follow-up</Text>
                                    </View>
                                    <View style={{ width: '100%', gap: 10 }}>
                                      <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                                        <Text style={{ width: '30%', color: 'black' }}>Date & Time:</Text>
                                        <TextInput style={{ borderColor: 'black', borderWidth: .8, width: "70%", borderRadius: 10 }}

                                          value={state.date}
                                          onChangeText={(text) => setState((prev) => ({ ...prev, date: text }))}
                                        />
                                      </View>
                                      < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                                        <Text style={{ width: '30%', color: 'black' }}>Remark:</Text>
                                        <TextInput style={{ borderColor: 'black', borderWidth: .8, width: "70%", borderRadius: 10 }}
                                          value={state.remark}
                                          onChangeText={(text) => setState((prev) => ({ ...prev, remark: text }))}
                                        />
                                      </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 10 }}>
                                      <TouchableOpacity onPress={() => setFollForm(false)} style={{ width: '48%' }}>
                                        <View style={{ backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 20 }}>
                                          <Text style={{ color: 'white', fontWeight: "bold" }}>Submit</Text>
                                        </View>
                                      </TouchableOpacity>
                                      <TouchableOpacity onPress={() => setFollForm(false)} style={{ width: '48%' }}>
                                        <View style={{ backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 20 }}>
                                          <Text style={{ color: 'white', fontWeight: "bold" }}>Cancel</Text>
                                        </View>
                                      </TouchableOpacity>

                                    </View>


                                  </View>

                                </View>
                              </Modal>
                            }
                            <TouchableOpacity style={{ width: '30%' }}
                            // onPress={() => setFollForm(true)}
                            >


                              <View style={{ backgroundColor: '#3C8B50', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>

                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Update</Text>
                              </View>
                            </TouchableOpacity>
                          </View>
                          {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: 15 }}>

                            <TouchableOpacity style={{ width: '45%' }}
                            
                            >
                              <View style={{ backgroundColor: 'orange', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>

                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Update</Text>
                              </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '45%' }} onPress={() => setSelectView(true)}>
                              <View style={{ backgroundColor: 'white', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>

                                <Text style={{ color: 'white', fontWeight: 'bold' }}></Text>
                              </View>
                            </TouchableOpacity>
                          </View> */}
                        </View>

                      </View>

                    </View>
                    <Modal transparent={true}
                      visible={form}
                    >
                      {
                      
                      
                       
                        
                        <View style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: 20, flex: 1, justifyContent: 'center', position: 'relative' }}>


                        <View style={{ backgroundColor: 'white', zIndex: 9, elevation: 5, borderRadius: 15, padding: 10, position: 'relative' }}>
                          <View style={{ position: 'absolute', top: -13, right: -13 }}>
                            <Pressable onPress={() => setForm(false)} style={{}}>

                              <View style={{ backgroundColor: 'red', borderRadius: 100, width: 30, height: 30, justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, textAlign: 'center', }}>X</Text>
                              </View>
                            </Pressable>
                          </View>
                          <View >
                            <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}> Organization Details</Text>
                            {
                              <>
                                <View style={{ padding: 10, marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
                                  <View style={{ borderRadius: 15, borderColor: 'yellow', borderWidth: 1, backgroundColor: '#FFFFD1', padding: 10 }}>


                                    <View style={styles.mainview}>
                                      <Text style={styles.textinside}>Name:</Text>
                                      <Text style={styles.textview}>{organization.organization_name}</Text>
                                    </View>
                                    <View style={styles.mainview}>
                                      <Text style={styles.textinside}>Email:</Text>
                                      <Text style={styles.textview}>{organization.organization_email}</Text>
                                    </View>
                                    <View style={styles.mainview}>
                                      <Text style={styles.textinside}>Contact:</Text>
                                      <Text style={styles.textview}>{organization.contact_1}</Text>
                                    </View>
                                    <View style={styles.mainview}>
                                      <Text style={styles.textinside}>WhatsApp:</Text>
                                      <Text style={styles.textview}>{organization.whatApps_number}</Text>
                                    </View>
                                    <View style={styles.mainview}>
                                      <Text style={styles.textinside}>Address:</Text>
                                      <Text style={{ width: "70%" }}>{organization.address}, {organization.city}, {organization.district}, {organization.pincode}</Text>
                                    </View>
                                    <View style={[styles.mainview, { justifyContent: 'center', alignItems: 'center' }]}>
                                      <Text style={styles.textinside}>Organization Type:</Text>
                                      <Text style={{ width: "70%" }}>{organization.organization_type}</Text>
                                    </View>

                                  </View>
                                </View>
                              </>
                            }
                          </View>
                          <View >
                            <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}> Owner Details</Text>
                            {
                              <>
                                <View style={{ padding: 10, marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
                                  <View style={{ borderRadius: 15, borderColor: 'yellow', borderWidth: 1, backgroundColor: '#FFFFD1', padding: 10 }}>


                                    <View style={styles.mainview}>
                                      <Text style={styles.textinside}>Name:</Text>
                                      <Text style={styles.textview}>{owner.owner_name}</Text>
                                    </View>
                                    <View style={styles.mainview}>
                                      <Text style={styles.textinside}>Email:</Text>
                                      <Text style={styles.textview}>{ }</Text>
                                    </View>
                                    <View style={styles.mainview}>
                                      <Text style={styles.textinside}>Contact:</Text>
                                      <Text style={styles.textview}>{ }</Text>
                                    </View>


                                  </View>
                                </View>
                              </>
                            }
                          </View>


                        </View>
                      </View>
                    
                      }

                    </Modal>


                    <View style={[styles.insubContainer, styles[collapse[Item.item.id] ? 'sliderShow' : 'sliderHide']]}>
                      <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', }}>
                        <Modal transparent={true}
                          visible={modalVisible}
                        >

                        </Modal>



                      </View>
                    </View>

                    <View>

                    </View>

                  </View>